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

      if(resposta.message == 'Usuário criado com sucesso'){

        this.alertService.success('Usuário criado, verifique seu email para completar o cadastro', { keepAfterRouteChange: true });

      }else{

        this.alertService.error('Ocorreu um erro, tente novamente mais tarde', { keepAfterRouteChange: true });

      }


      console.log(resposta)

      this.isRegistering = false;


    }, err => {

      this.isRegistering = false;

      console.log(err)
    })
  }

}
