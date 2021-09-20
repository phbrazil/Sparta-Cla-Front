import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from 'src/app/_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  isRegistering = false;

  constructor(private fb: FormBuilder, private accountService: AccountService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  enviar() {

    this.isRegistering = true;

    this.accountService.register(this.formRegister.value).subscribe(resposta => {

      console.log(resposta)

      if(resposta.message.code == 200){

        this.formRegister.reset();

        this.alertService.success('Estamos quase lá!!! Verifique seu email para completar o cadastro', { keepAfterRouteChange: true });

      }else{

        this.alertService.error('Ocorreu um erro, tente novamente mais tarde', { keepAfterRouteChange: true });

      }

      this.isRegistering = false;


    }, err => {

      this.isRegistering = false;


      if(err.error.message== 'Email já em uso'){

        this.alertService.error('Esse email já está em uso, tente redefinir sua senha ou verificar sua caixa de emails', { keepAfterRouteChange: true });

      }else{

        this.alertService.error('Ocorreu um erro, tente novamente mais tarde', { keepAfterRouteChange: true });

      }
    })
  }

}
