import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
import * as $ from 'jquery';
import { pairs } from 'underscore';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  formEditUser: FormGroup;
  isLoading = false;
  isLoadingUser = false;
  user: User;

  @Input() idUser: number;

  constructor(private fb: FormBuilder, private accountService: AccountService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {

    this.formEditUser = this.fb.group({
      idUser: [{value: '', disabled: true}, Validators.required],
      nome: [{value: '', disabled: true}, Validators.required],
      email: [{value: '', disabled: true}, Validators.required],
      username: [{value: '', disabled: true}, Validators.required],
      wzProfile: ['', [Validators.required]],
      platform: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      nascimento: [{value: '', disabled: true}, Validators.required],
    })


  }

  ngOnChanges() {

    if (this.idUser) {

      this.isLoadingUser = true;

      this.accountService.getUserById(this.idUser).subscribe(user => {

        this.isLoadingUser = false;

        this.user = user;

        this.loadUser();

      }, err => {

        this.isLoadingUser = false;

        console.log(err)

      })


    }
  }

  enviar() {

    this.isLoading = true;

    this.accountService.getUserById(this.idUser).subscribe(res => {

      this.user = res;

      this.user.wzProfile = this.formEditUser.value.wzProfile;
      this.user.platform = this.formEditUser.value.platform;
      this.user.pais = this.formEditUser.value.pais;
      this.user.estado = this.formEditUser.value.estado;

      this.accountService.editUser(this.user).subscribe(res => {

        this.isLoading = false;

        this.alertService.success('Usuário alterado com sucesso', 'Verifique a lista de usuários', { keepAfterRouteChange: true });

        //REMOVE FADE BUGADO QUE CONTINUAVA
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $('#modalEdit').toggle();

        this.reloadCurrentRoute();


      }, err => {

        this.isLoading = false;

        this.alertService.error('Ocorreu um erro', 'Tente novamente mais tarde', { keepAfterRouteChange: true });

      })

    }, err => {

      this.alertService.error('Ocorreu um erro', 'Tente novamente mais tarde', { keepAfterRouteChange: true });

    })

  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  loadUser() {

      this.formEditUser = this.fb.group({
        idUser: [{value: `${this.user.idUser}`, disabled: true}, Validators.required],
        nome: [{value: `${this.user.nome}`, disabled: true}, Validators.required],
        email: [{value: `${this.user.email}`, disabled: true}, Validators.required],
        username: [{value: `${this.user.estado}`, disabled: true}, Validators.required],
        wzProfile: [{value: `${this.user.wzProfile}`, disabled: false}, Validators.required],
        platform: [{value: `${this.user.platform}`, disabled: false}, Validators.required],
        pais: [{value: `${this.user.pais}`, disabled: false}, Validators.required],
        estado: [{value: `${this.user.estado}`, disabled: false}, Validators.required],
        nascimento: [{value: `${this.user.nascimento}`, disabled: false}, Validators.required],
      })

  }

}
