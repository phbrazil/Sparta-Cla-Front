import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
import { ActivisionService } from 'src/app/_services/activision.service';

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
  isCheckingProfile = false;
  isPublicProfile = true;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private accountService: AccountService,
    private alertService: AlertService, private router: Router,
    private activisionService: ActivisionService) { }

  ngOnInit(): void {

    this.accountService.user.subscribe(x => {
      this.user = x

      if(!this.user){

        this.router.navigate(['/']);

      }

    });

    this.formRegisterConfirmation = this.fb.group({
      username: ['', [Validators.required]],
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

    this.accountService.completeRegister(this.formRegisterConfirmation.value).subscribe(user => {

      this.accountService.setUser(user);

      localStorage.setItem('user', JSON.stringify(user));

      this.alertService.success(user.message.text, user.message.subText, { keepAfterRouteChange: true });

      this.isLoading = false;

      //CHECK IF ACTIVISION PROFILE IS PUBLIC
      this.checkProfileActivision();

      if (!this.isPublicProfile && !this.isCheckingProfile) {

        this.alertService.error('Seu Perfil Activision não está público', 'Acesse o menu Meu Perfil para mais detalhes', { keepAfterRouteChange: true });

      }


      this.router.navigate(['/welcome']);

    }, err => {

      this.isLoading = false;

      if (err.status == 500) {

        this.alertService.error('Ocorreu um erro', 'Tente novamente mais tarde', { keepAfterRouteChange: true });

      } else if (err.status == 401) {

        this.alertService.error('Ocorreu um erro', 'Tente novamente mais tarde', { keepAfterRouteChange: true });

        this.accountService.logout();

      } else {

        this.alertService.error(err.error.message.text, err.error.message.subText, { keepAfterRouteChange: true });

      }



    })
  }

  checkProfileActivision() {

    this.isCheckingProfile = true;

    //CHECK IF ACTIVISION PROFILE IS PUBLIC
    this.activisionService.checkPublicStatus(this.user.wzProfile, this.user.platform);

    this.activisionService.getPublicStatus().subscribe(status => {
      this.isCheckingProfile = false;
      this.isPublicProfile = status;
    }, err => {
      this.isCheckingProfile = false;
    })
  }

  checkUrl() {

    this.activatedRoute.queryParams.subscribe(params => {
      let date = params['startdate'];
      console.log(date); // Print the parameter to the console.
    });

  }

  choosePlatform(platform) {
    this.platform = platform;
    this.formRegisterConfirmation.patchValue({ platform: platform });

  }

}
