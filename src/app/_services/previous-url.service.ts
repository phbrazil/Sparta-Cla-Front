import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as $ from 'jquery'
@Injectable({
  providedIn: 'root'
})
export class PreviousURLService {

  private previousURL = new BehaviorSubject<string>('');


  constructor() { }

  public setPreviousURL(url: string): void{
    this.previousURL.next(url);
  }

  public getPreviousURL(): Observable<string>{
    return this.previousURL.asObservable();
  }

}
