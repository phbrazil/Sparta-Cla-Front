import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService, AlertService } from 'src/app/_services';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  formReset: FormGroup;

  isLoading = false;

  constructor(private fb: FormBuilder,
    private alertService: AlertService, private router: Router,
    private accountService: AccountService) { }
  ngOnInit(): void {

    this.formReset = this.fb.group({
      emailReset: ['', [Validators.required, Validators.email]],
    })
  }

  enviar() {
    if (this.formReset.invalid) {

      this.alertService.error('Dados incorretos', 'tente novamente', { keepAfterRouteChange: true });

    } else {

      this.postReset(this.formReset)

    }

  }

  postReset(body){

  }


}
