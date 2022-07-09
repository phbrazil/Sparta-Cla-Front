import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as $ from 'jquery'
@Injectable({
  providedIn: 'root'
})
export class ModalControlService {

  private isModalLogin = new BehaviorSubject<boolean>(false);
  private isModalRegister = new BehaviorSubject<boolean>(false);
  private isModalReset = new BehaviorSubject<boolean>(false);
  private modalCodPonits = new BehaviorSubject<boolean>(false);



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

  public setModalCodPonits(status: boolean): void{
    this.modalCodPonits.next(status);
  }

  public getModalCodPonits(): Observable<boolean>{
    return this.modalCodPonits.asObservable();
  }

  closeAllModals() {

    //REMOVE FADE BUGADO QUE CONTINUAVA
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();

    this.setModalLogin(false);
    this.setModalRegister(false);
    this.setModalReset(false);
    this.setModalCodPonits(false);

  }



}
