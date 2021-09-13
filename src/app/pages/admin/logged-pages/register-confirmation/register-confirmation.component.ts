import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-confirmation',
  templateUrl: './register-confirmation.component.html',
  styleUrls: ['./register-confirmation.component.css']
})
export class RegisterConfirmationComponent implements OnInit {

  formRegisterConfirmation: FormGroup;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.formRegisterConfirmation = this.fb.group({
      username: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      wzProfile: ['', [Validators.required]],
      platform: ['', [Validators.required]],
      nascimento: ['', [Validators.required]]
    })
  }
  enviar() {

  }

}
