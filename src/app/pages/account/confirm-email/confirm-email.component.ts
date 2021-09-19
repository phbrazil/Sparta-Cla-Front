import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService } from 'src/app/_services';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  validationCode: string;
  isLoading =false;

  constructor(private activateRoute: ActivatedRoute,
    private accountService: AccountService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void {

    this.activateRoute.queryParams.subscribe(params => {
      this.validationCode = params['key'];
    });
  }

  confirm() {

    this.isLoading = true;

    this.accountService.confirmEmail(this.validationCode).subscribe(status => {

      if (status == true) {

        this.isLoading = false;

        this.alertService.success("Obrigado! Efetue o acesso à sua conta e complete seu cadastro", { keepAfterRouteChange: true })

        this.router.navigate(['/']);

      }else{
        this.isLoading = false;

        this.alertService.error(`Ocorreu um erro, tente novamente mais tarde, status: ${status}`)
      }

    }, err=>{
      this.isLoading = false;

      this.alertService.error(`Ocorreu um erro, tente novamente mais tarde, status: ${err}`)
    });

  }

}
