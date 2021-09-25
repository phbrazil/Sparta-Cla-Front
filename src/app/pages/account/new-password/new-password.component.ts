import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  formNewPassword: FormGroup;

  isChangingPassword = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formNewPassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

  }

  enviar(){

  }

}
