import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './_models/user';
import { AccountService } from './_services';
import { ModalControlService } from './_services/modal-control.service';
import * as $ from 'jquery';
import { LoginComponent } from './pages/account/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmTournamentComponent } from './pages/admin/logged-pages/confirm-tournament/confirm-tournament.component';
import { PreviousRouteService } from './_services/previous-route.service';
//declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  validationCode: string;
  isCheckingConfirmTournament = false;
  returnUrl: string;

  isMessage: boolean = false;

  // save the previous route
  //public previousRoutePath = new BehaviorSubject<string>('');

  constructor(private accountService: AccountService, private router: Router,
    private modalControl: ModalControlService,
    private location: Location, public dialog: MatDialog,
    private previousRoutePath: PreviousRouteService) {

    this.accountService.user.subscribe(x => this.user = x);

  }

  title = 'Sparta Clã';

  ngOnInit(): void {

    this.returnUrl = decodeURIComponent(this.location.path()).replace("?returnUrl=", "");

    if(this.returnUrl.startsWith("/confirm-tournament")){

      this.previousRoutePath.setPreviousURL(this.location.path());

    }

    this.modalControl.closeAllModals();

    this.checkConfirmTournament();

  }

  checkConfirmTournament() {

    this.isCheckingConfirmTournament = true;

    this.previousRoutePath.getPreviousURL().subscribe(url => {

      if (this.user && !this.user.changePassword) {
        if (this.returnUrl.startsWith('/confirm-tournament')
          || url && url.startsWith('/confirm-tournament')) {

          this.dialog.open(ConfirmTournamentComponent);

        } else {

          this.router.navigate(['/welcome']);

        }

      } else {
        if (this.returnUrl.startsWith('/confirm-tournament')
          || url && url.startsWith('/confirm-tournament')) {

          this.dialog.open(LoginComponent);

        }

      }

    });
  }

}
