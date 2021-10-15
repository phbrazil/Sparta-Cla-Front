import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'underscore';
import { AccountService } from '.';
import { User } from '../_models/user';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  user: User;
  token: string;

  constructor(private accountService: AccountService

  ) {

    this.accountService.user.subscribe(x => {

      this.user = x;

      this.token = this.accountService.getToken();

    });

    //this.token = this.user ? this.user.token : '' ;

  }

  //token = localStorage.getItem('token');


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!this.token) {

      this.token = this.accountService.getToken();
      //this.accountService.logout()
    }

    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
    });

    /*this.accountService.getTokenStatus(this.token).subscribe(res =>{
      console.log(res)
    })*/

    this.accountService.getIsLogged().subscribe(status => {

    })

    return next.handle(req).pipe(
      catchError(err => {
        if (err.status === 401) {

          console.log('Accesso negado ', req)

          //this.accountService.logout();

        } else {
          console.log('to no else ', req)
        }
        return throwError(err);
      }));

    //return next.handle(req);

  }





}
