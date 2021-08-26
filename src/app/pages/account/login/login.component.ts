import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService, AlertService } from 'src/app/_services';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  isLoading = false;

  constructor(private fb: FormBuilder,
    private alertService: AlertService, private router: Router,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  enviar() {
    if (this.formLogin.invalid) {

      this.alertService.error('Dados incorretos', { keepAfterRouteChange: true });

    } else {

      this.postLogin(this.formLogin)

    }

  }

  resetForm() {

    this.formLogin.reset();

  }

  postLogin(formLogin: FormGroup) {

    this.isLoading = true;

    this.accountService.login(formLogin.value.email, formLogin.value.senha).subscribe(resposta => {

      this.isLoading = false;

      //REMOVE FADE BUGADO QUE CONTINUAVA AO LOGAR
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();

      this.router.navigate(['/welcome']);

    }, err => {

      this.isLoading = false;

      if (err.status === 401) {

        this.alertService.error('Acesso Negado', { keepAfterRouteChange: true });

      } else {

        this.alertService.error('Erro ' + err.status, { keepAfterRouteChange: true });

      }


    })
  }

}
