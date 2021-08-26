import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../_models/login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly signinUrl: string = 'https://sparta-clan.herokuapp.com/account/api/auth/signin'

  constructor(private http: HttpClient) { }

  postLogin(login: any):Observable<Login> {
    return this.http.post<Login>(this.signinUrl, login);
  }
}

