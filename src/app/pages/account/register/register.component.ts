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
      emailRegister: ['', [Validators.required, Validators.email]],
      nomeRegister: ['', [Validators.required]],
      passwordRegister: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  enviar() {

    this.isRegistering = true;

    this.accountService.register(this.formRegister.value).subscribe(resposta => {

      console.log(resposta)

      if(resposta.message.code == 200){

        this.formRegister.reset();

        this.alertService.success(resposta.message.text, resposta.message.subText, { keepAfterRouteChange: true });

      }else{

        this.alertService.error(resposta.message.text, resposta.message.subText, { keepAfterRouteChange: true });

      }

      this.isRegistering = false;


    }, err => {

      this.isRegistering = false;


      if(err.error.message== 'Email já em uso'){

        this.alertService.error('Esse email já está em uso, ', "tente redefinir sua senha ou verificar sua caixa de emails", { keepAfterRouteChange: true });

      }else{
        console.log(err.error, "mensagem de erro");
        this.alertService.error(err.error.message.text, err.error.message.subText, { keepAfterRouteChange: true });

      }
    })
  }

}
