import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from '../pages/account/login/login.component';
import { AccountService } from './account.service';
import { PreviousRouteService } from './previous-route.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService, private dialog: MatDialog,
        private location: Location, private previousRoutePath: PreviousRouteService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.accountService.userValue;
        if (user) {
            // authorised so return true
            return true;
        }

        const returnUrl = decodeURIComponent(this.location.path()).replace("?returnUrl=", "");

        if(returnUrl.startsWith("/confirm-tournament")){

          this.previousRoutePath.setPreviousURL(this.location.path());

        }

        //open login modal
        this.dialog.open(LoginComponent);

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
