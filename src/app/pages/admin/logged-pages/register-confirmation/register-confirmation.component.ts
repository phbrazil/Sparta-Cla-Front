import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-confirmation',
  templateUrl: './register-confirmation.component.html',
  styleUrls: ['./register-confirmation.component.css']
})
export class RegisterConfirmationComponent implements OnInit {

  formRegisterConfirmation: FormGroup;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

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

    this.checkUrl();

  }
  enviar() {

  }

  checkUrl() {

    this.activatedRoute.queryParams.subscribe(params => {
      let date = params['startdate'];
      console.log(date); // Print the parameter to the console.
    });

  }

}
