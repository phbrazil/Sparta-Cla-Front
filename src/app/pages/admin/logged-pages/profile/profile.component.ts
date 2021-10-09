import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  disable = true;

  constructor(private accountService: AccountService, private fb: FormBuilder) {

    this.accountService.user.subscribe(x => this.user = x);

   }

  ngOnInit(): void {
    if (this.user.idUser) {
       this.formUser(this.user);
    }
    else {
      this.formUser(this.formUserNull());
    }
  }

  formUser (user: User): void {
    this.userForm = this.fb.group({
      // userName: [user.nome, [Validators.required]],
      // userWz: [user.username, [Validators.required]],
      // userPais: [user.pais, [Validators.required]],
      // userEstado: [user.estado, [Validators.required]],
      // userWzProfile: [user.wzProfile, [Validators.required]],
      // userPlatform: [user.platform, [Validators.required]],

      userName: [{value: `${user.nome}`, disabled: true}, [Validators.required]],
      userWz: [{value: `${user.username}`, disabled: true}, [Validators.required]],
      userPais: [{value: `${user.pais}`, disabled: true}, [Validators.required]],
      userEstado: [{value: `${user.estado}`, disabled: true}, [Validators.required]],
      userWzProfile: [{value: `${user.wzProfile}`, disabled: true}, [Validators.required]],
      userPlatform: [{value: `${user.platform}`, disabled: true}, [Validators.required]],
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
    document.getElementsByTagName("input")[0].disabled = false;
    document.getElementsByTagName("input")[1].disabled = false;
    document.getElementsByTagName("input")[4].disabled = false;
    document.getElementsByTagName("input")[5].disabled = false;
    document.getElementsByTagName("input")[6].disabled = false;
    document.getElementsByTagName("input")[7].disabled = false;

  }

  disableForm() {
    this.disable = true;
    document.getElementsByTagName("input")[0].disabled = true;
    document.getElementsByTagName("input")[1].disabled = true;
    document.getElementsByTagName("input")[4].disabled = true;
    document.getElementsByTagName("input")[5].disabled = true;
    document.getElementsByTagName("input")[6].disabled = true;
    document.getElementsByTagName("input")[7].disabled = true;
  }

  editUser(): void {

    if (this.user.idUser) {
      this.accountService.editUser(this.user.idUser, this.userForm.value).subscribe( success => {
        alert("Sucesso!");
        console.log(success, "sucesso");
      }, error => {
        alert("Erro");
        console.log("deu ruim", error)
      });
    }
  }

}
