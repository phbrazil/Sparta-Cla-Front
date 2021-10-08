import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { User } from '../_models/user';
import { ModalControlService } from './modal-control.service';
import * as $ from 'jquery';
@Injectable({ providedIn: 'root' })
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  private emailNewPassword = new BehaviorSubject<string>(null);

  constructor(
    private router: Router,
    private http: HttpClient,
    private alertService: AlertService,
    private modalControl: ModalControlService
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public setUser(user: User) {

    this.userSubject.next(user);

  }

  //email para troca de senha
  public setEmailNewPassword(email: string){
    this.emailNewPassword.next(email);
  }

  public getEmailNewPassword(): Observable<string>{
    return this.emailNewPassword.asObservable();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

  cep(cep: string) {

    cep = cep.replace(/\D/g, '');

    if (cep !== '') {

      const validaCep = /^[0-9]{8}$/;

      if (validaCep.test(cep)) {
        //let url = `http://localhost:8080/sparta/getCep/${cep}`;
        let url = `https://spartaclan.herokuapp.com/sparta/getCep/${cep}`;

        return this.http.get<any>(url)
          .pipe(map(dados => {
            //this.alertService.success('Cep válido', { keepAfterRouteChange: true });

            switch (dados.dados.uf) {
              case 'RO':
                dados.dados.estado = 'Rondônia'
                break;
              case 'AC':
                dados.dados.estado = 'Acre'
                break;
              case 'AM':
                dados.dados.estado = 'Amazonas'
                break;
              case 'RR':
                dados.dados.estado = 'Roraima'
                break;
              case 'PA':
                dados.dados.estado = 'Pará'
                break;
              case 'AP':
                dados.dados.estado = 'Amapá'
                break;
              case 'TO':
                dados.dados.estado = 'Tocantins'
                break;
              case 'MA':
                dados.dados.estado = 'Maranhão'
                break;
              case 'PI':
                dados.dados.estado = 'Piauí'
                break;
              case 'CE':
                dados.dados.estado = 'Ceará'
                break;
              case 'RN':
                dados.dados.estado = 'Rio Grande do Norte'
                break;
              case 'PB':
                dados.dados.estado = 'Paraíba'
                break;
              case 'PE':
                dados.dados.estado = 'Pernambuco'
                break;
              case 'AL':
                dados.dados.estado = 'Alagoas'
                break;
              case 'SE':
                dados.dados.estado = 'Sergipe'
                break;
              case 'BA':
                dados.dados.estado = 'Bahia'
                break;
              case 'MG':
                dados.dados.estado = 'Minas Gerais'
                break;
              case 'ES':
                dados.dados.estado = 'Espírito Santo'
                break;
              case 'RJ':
                dados.dados.estado = 'Rio de Janeiro'
                break;
              case 'SP':
                dados.dados.estado = 'São Paulo'
                break;
              case 'PR':
                dados.dados.estado = 'Paraná'
                break;
              case 'RS':
                dados.dados.estado = 'Rio Grande do Sul'
                break;
              case 'MS':
                dados.dados.estado = 'Mato Grosso do Sul'
                break;
              case 'MT':
                dados.dados.estado = 'Mato Grosso'
                break;
              case 'GO':
                dados.dados.estado = 'Goiás'
                break;
              case 'DF':
                dados.dados.estado = 'Distrito Federal'
                break;
            }
            return dados;
          }));
      } else {
        this.alertService.error('Cep inválido', 'tente novamente', { keepAfterRouteChange: true });

      }
    }
  }



  login(username, password) {

    //const url = 'http://localhost:8080/account/api/auth/signin';

    const url = 'https://sparta-clan.herokuapp.com/account/api/auth/signin';

    return this.http.post<User>(url, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', user.token);
        this.userSubject.next(user);
        console.log(user)
        return user;
      }));
  }

  logout() {

    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('lastName');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }

  register(body) {

    //return this.http.post<any>('http://localhost:8080/spartaclan/createAccount', body);

    return this.http.post<any>('https://sparta-clan.herokuapp.com/spartaclan/createAccount', body);

  }

  completeRegister(body) {

    const token = localStorage.getItem('token');

    const headers = { 'Authorization': `Bearer ${token}` }

    //return this.http.put<any>('http://localhost:8080/spartaclan/completeAccount', body, {headers});

    return this.http.put<any>('https://sparta-clan.herokuapp.com/spartaclan/completeAccount', body, { headers });

  }

  confirmEmail(validationCode: string) {

    //return this.http.post<any>('http://localhost:8080/spartaclan/confirmEmail', body);

    return this.http.post<any>(`https://sparta-clan.herokuapp.com/spartaclan/confirmEmail/${validationCode}`, {});


  }



  getById(id: string) {

    const token = localStorage.getItem('token');

    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    }

    const url = `http://localhost:8080/account/api/auth/user/${id}`;

    //const url = `https://sparta-clan.herokuapp.com/account/api/auth/user/${id}`


    return this.http.get<User>(url, header);
  }

  editUser(body) {

    const token = localStorage.getItem('token');

    const headers = { 'Authorization': `Bearer ${token}` }

    //return this.http.put<any>('http://localhost:8080/spartaclan/editAccount', body, { headers });

    return this.http.put<any>('https://sparta-clan.herokuapp.com/spartaclan/editAccount', body, { headers });

  }


  resetPassword(body) {

    //return this.http.post<any>('http://localhost:8080/account/api/auth/resetPassword', body);
    return this.http.post<any>(' https://sparta-clan.herokuapp.com/account/api/auth/resetPassword', body);

  }

  confirmNewPassword(email, password) {

    //const url = 'http://localhost:8080/account/api/auth/confirmNewPassword';

    const url = 'https://sparta-clan.herokuapp.com/account/api/auth/confirmNewPassword';

    return this.http.post<User>(url, { email, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', user.token);
        this.userSubject.next(user);
        return user;
      }));
  }

}
