import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';

@Component({
  selector: 'app-register-confirmation',
  templateUrl: './register-confirmation.component.html',
  styleUrls: ['./register-confirmation.component.css']
})
export class RegisterConfirmationComponent implements OnInit {

  formRegisterConfirmation: FormGroup;
  platform: string;

  user: User

  isLoading = false;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private accountService: AccountService,
    private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {

    this.accountService.user.subscribe(x => this.user = x);

    this.formRegisterConfirmation = this.fb.group({
      usuario: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      pais: ['Brasil', [Validators.required]],
      estado: ['', [Validators.required]],
      wzProfile: ['', [Validators.required]],
      platform: ['', [Validators.required]],
      nascimento: ['', [Validators.required]]
    })

    this.checkUrl();

  }
  enviar() {

    this.isLoading = true;

    this.accountService.completeRegister(this.formRegisterConfirmation.value).subscribe(resposta =>{

      localStorage.setItem('user', JSON.stringify(resposta));

      this.alertService.success(resposta.message.text, resposta.message.subText, { keepAfterRouteChange: true });

      this.isLoading = false;

      this.router.navigate(['/welcome']);

    }, err => {

      this.alertService.error(err.error.message.text, err.error.message.subText, { keepAfterRouteChange: true });

      this.isLoading = false;

    })
  }

  checkUrl() {

    this.activatedRoute.queryParams.subscribe(params => {
      let date = params['startdate'];
      console.log(date); // Print the parameter to the console.
    });

  }

  choosePlatform(platform){
    this.platform = platform;
    this.formRegisterConfirmation.patchValue({platform: platform});

  }

}
