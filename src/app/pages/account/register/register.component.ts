import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from 'src/app/_services';
import { ModalControlService } from 'src/app/_services/modal-control.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  isRegistering = false;

  constructor(private fb: FormBuilder, private accountService: AccountService,
    private alertService: AlertService, private modalControl: ModalControlService) { }

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

      if (resposta.message.code == 200) {

        this.formRegister.reset();

        this.alertService.success(resposta.message.text, resposta.message.subText, { keepAfterRouteChange: true });

      } else {

        this.alertService.error(resposta.message.text, resposta.message.subText, { keepAfterRouteChange: true });

      }

      this.isRegistering = false;


    }, err => {

      this.isRegistering = false;

      this.alertService.error(err.message, err.message, { keepAfterRouteChange: true })


    })
  }

  setModalLoginAsOpen(){
    this.modalControl.setModalLogin(true);
    this.modalControl.setModalRegister(false);
    this.modalControl.setModalReset(false);
  }

}
