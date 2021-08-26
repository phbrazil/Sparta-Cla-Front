import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Array<any>;
  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private postForm: LoginService) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  enviar() {
    if(this.formLogin.invalid) {
      return alert('Form Invalido!!!' + JSON.stringify(this.formLogin.value, null, 4));
    }

    alert('Sucesso!!!' + JSON.stringify(this.formLogin.value, null, 4));
  }

  resetForm() {
    this.formLogin.reset();
  }

  postLogin(frm: FormGroup) {
    this.postForm.postLogin(this.formLogin).subscribe(resposta => {
      console.log(resposta);
      this.login.push(resposta);
    })
  }

}
