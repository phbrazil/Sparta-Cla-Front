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

    this.accountService.getIsLogged().subscribe(status => {

    })

    return next.handle(req).pipe(
      catchError(err => {

        //ACTIVISION ID INCORRETO TAMBEM RETORNA 401
        if (err.status === 401 && err.error.error == 'Unauthorized') {

          this.accountService.logout('interceptor');

        } else {
          console.log(err)
        }
        return throwError(err);
      }));

    //return next.handle(req);

  }





}
