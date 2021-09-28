import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService, AlertService } from 'src/app/_services';
import { ModalControlService } from 'src/app/_services/modal-control.service';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  emailNewPassword: string;

  formNewPassword: FormGroup;

  isChangingPassword = false;

  constructor(private fb: FormBuilder, private accountService: AccountService,
    private modalControl: ModalControlService, private alert: AlertService, private router: Router) { }

  ngOnInit(): void {

    this.accountService.getEmailNewPassword().subscribe(email => {

      this.emailNewPassword = email;

    });

    this.modalControl.closeAllModals();

    this.formNewPassword = this.fb.group({
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

  }

  enviar() {

    this.isChangingPassword = true;


    this.accountService.confirmNewPassword(this.emailNewPassword, this.formNewPassword.value.password).subscribe(res =>{

      this.router.navigate(['/welcome']);

      this.isChangingPassword = false;

    }, err =>{

      this.isChangingPassword = false;

      this.alert.error('Ocorreu um erro', 'Tente novamente mais tarde', { keepAfterRouteChange: true })
    })


  }

}
