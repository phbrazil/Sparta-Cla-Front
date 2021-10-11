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

  constructor(private accountService: AccountService,
              private fb: FormBuilder,
              private alertService: AlertService,
              private activisionService: ActivisionService) {

    this.accountService.user.subscribe(x => this.user = x);

   }

  ngOnInit(): void {

    this.getStats(this.user.wzProfile, this.user.platform);

    if (this.user.idUser) {
       this.formUser(this.user);
    }
    else {
      this.formUser(this.formUserNull());
    }
  }

  formUser (user: User): void {
    this.userForm = this.fb.group({
      idUser: [{value: `${user.idUser}`, disabled: true}, [Validators.required]],
      username: [{value: `${user.username}`, disabled: true}, [Validators.required]],
      pais: [{value: `${user.pais}`, disabled: true}, [Validators.required]],
      estado: [{value: `${user.estado}`, disabled: true}, [Validators.required]],
      nascimento: [{value: `${user.nascimento}`, disabled: true}, [Validators.required]],
      wzProfile: [{value: `${user.wzProfile}`, disabled: true}, [Validators.required]],
      platform: [{value: `${user.platform}`, disabled: true}, [Validators.required]],
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
    document.getElementsByTagName("input")[1].disabled = false;
    document.getElementsByTagName("input")[2].disabled = false;
    document.getElementsByTagName("input")[5].disabled = false;
    document.getElementsByTagName("input")[6].disabled = false;
    document.getElementsByTagName("input")[7].disabled = false;

  }

  disableForm() {
    this.disable = true;
    document.getElementsByTagName("select")[0].disabled = true;
    document.getElementsByTagName("input")[1].disabled = true;
    document.getElementsByTagName("input")[2].disabled = true;
    document.getElementsByTagName("input")[5].disabled = true;
    document.getElementsByTagName("input")[6].disabled = true;
    document.getElementsByTagName("input")[7].disabled = true;
  }

  editUser(): void {

    if (this.user.idUser) {
      this.accountService.editUser(this.userForm.value).subscribe( () => {

        let user = JSON.parse(localStorage.getItem('user'));
        user.estado = this.userForm.value.estado;
        localStorage.setItem('user', JSON.stringify(user));

        this.alertService.success('Sucesso', 'usuário editado');

        this.disable = true;
        this.disableForm();


      }, error => {
        alert("Erro");
        console.log("deu ruim", error)
      });
    }
  }

  getStats(wzProfile: string, platform: string) {

    this.activisionService.getWarzoneInfoCloudFunction(Constants.email, Constants.password, wzProfile, platform).subscribe( res => {
      this.stats = res.response;
      this.kd = Math.round(this.stats.br.kdRatio * 100) / 100;
    });
  }

}
