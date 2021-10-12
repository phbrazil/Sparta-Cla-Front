import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
import { ActivisionService } from 'src/app/_services/activision.service';
import { Constants } from 'src/app/utils/Constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  stats: any;
  kd: any;
  disable = true;
  isLoading = false;
  isCheckingProfile = false;
  isPublicProfile = true;
  platform: string;


  constructor(private accountService: AccountService,
    private fb: FormBuilder,
    private alertService: AlertService,
    private activisionService: ActivisionService) {

    this.accountService.user.subscribe(x => this.user = x);

  }

  ngOnInit(): void {

    this.checkProfileActivision();

    this.getStats(this.user.wzProfile, this.user.platform);

    if (this.user.idUser) {
      this.formUser(this.user);
      this.choosePlatform(this.user.platform);
    }
    else {
      this.formUser(this.formUserNull());
    }
  }

  formUser(user: User): void {
    this.userForm = this.fb.group({
      idUser: [{ value: `${user.idUser}`, disabled: true }, [Validators.required]],
      username: [{ value: `${user.username}`, disabled: true }, [Validators.required]],
      pais: [{ value: `${user.pais}`, disabled: true }, [Validators.required]],
      estado: [{ value: `${user.estado}`, disabled: true }, [Validators.required]],
      nascimento: [{ value: `${user.nascimento}`, disabled: true }, [Validators.required]],
      wzProfile: [{ value: `${user.wzProfile}`, disabled: true }, [Validators.required]],
      platform: [{ value: `${user.platform}`, disabled: true }, [Validators.required]],
    })
  }

  formUserNull(): User {
    return {
      idUser: null,
      nome: null,
      username: null,
      email: null,
      wzProfile: null,
      platform: null,
      nascimento: null,
      pais: null,
      estado: null,
    } as User
  }

  enableForm(): void {
    this.disable = false;
    document.getElementsByTagName("select")[0].disabled = false;
    document.getElementsByTagName("select")[1].disabled = false;
    document.getElementsByTagName("input")[2].disabled = false;
    document.getElementsByTagName("input")[5].disabled = false;

  }

  disableForm() {
    this.disable = true;
    document.getElementsByTagName("select")[0].disabled = true;
    document.getElementsByTagName("select")[1].disabled = true;
    document.getElementsByTagName("input")[2].disabled = true;
    document.getElementsByTagName("input")[5].disabled = true;
  }

  editUser(): void {

    if (this.user.idUser) {

      this.isLoading = true;
      this.accountService.editUser(this.userForm.value).subscribe(() => {
        this.isLoading = false;
        let user = JSON.parse(localStorage.getItem('user'));

        user.username = this.userForm.value.username;
        user.estado = this.userForm.value.estado;
        user.pais = this.userForm.value.pais;
        user.wzProfile = this.userForm.value.wzProfile;
        user.platform = this.userForm.value.platform;

        this.user.username = this.userForm.value.username;
        this.user.estado = this.userForm.value.estado;
        this.user.pais = this.userForm.value.pais;
        this.user.wzProfile = this.userForm.value.wzProfile;
        this.user.platform = this.userForm.value.platform;

        localStorage.setItem('user', JSON.stringify(user));

        this.alertService.success('Usuário alterado com sucesso', '', {autoClose: true});

        this.disable = false;
        this.disableForm();

        //CHECK IF ACTIVISION PROFILE IS PUBLIC
        this.checkProfileActivision();


      }, error => {

        this.isLoading = false;
        this.alertService.error('Ocorreu um erro', 'Tente novamente mais tarde');
      });
    }
  }

  checkProfileActivision() {

    this.isCheckingProfile = true;

    //CHECK IF ACTIVISION PROFILE IS PUBLIC
    this.activisionService.checkPublicStatus(this.user.wzProfile, this.user.platform);

    this.activisionService.getPublicStatus().subscribe(status => {
      this.isCheckingProfile = false;
      this.isPublicProfile = status;
    }, err =>{
      this.isCheckingProfile = false;
    })
  }

  getStats(wzProfile: string, platform: string) {

    this.activisionService.getWarzoneInfoCloudFunction(Constants.email, Constants.password, wzProfile, platform).subscribe(res => {
      this.stats = res.response;
      this.kd = Math.round(this.stats.br.kdRatio * 100) / 100;
    });
  }

  getPlatform(platform: string){
    switch(platform){
      case 'psn':
        return 'PSN';
      case 'xbl':
        return 'Xbox Live';
      case 'battle':
        return 'Battle Net';
    }
  }

  choosePlatform(platform) {
    this.platform = platform;
    this.userForm.patchValue({ platform: platform });

    console.log(this.userForm.value)

  }

}
