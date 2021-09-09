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
      usuario: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required ]],
      pais: ['', [Validators.required]],
      estado: ['', [Validators.required]],

      idPlataforma: ['', [Validators.required]]

    })
  }
  enviar() {

  }

}
