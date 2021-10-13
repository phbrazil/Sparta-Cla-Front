import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '.';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private accountService: AccountService

  ) {

  }

  token = localStorage.getItem('token');

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      },
    });

    /*this.accountService.getTokenStatus().subscribe(res =>{
      console.log(res)
    }, err =>{
      console.log(err)
    })*/


    return next.handle(req);
  }
}
