import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalControlService {

  private isModalLogin = new BehaviorSubject<boolean>(false);
  private isModalRegister = new BehaviorSubject<boolean>(false);
  private isModalReset = new BehaviorSubject<boolean>(false);



  constructor() { }

  public setModalLogin(status: boolean): void{
    this.isModalLogin.next(status);
  }

  public getModalLogin(): Observable<boolean>{
    return this.isModalLogin.asObservable();
  }

  public setModalReset(status: boolean): void{
    this.isModalReset.next(status);
  }

  public getModalReset(): Observable<boolean>{
    return this.isModalReset.asObservable();
  }

  public setModalRegister(status: boolean): void{
    this.isModalRegister.next(status);
  }

  public getModalRegister(): Observable<boolean>{
    return this.isModalRegister.asObservable();
  }



}
