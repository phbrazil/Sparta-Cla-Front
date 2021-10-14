import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from '../utils/Constants';

@Injectable({ providedIn: 'root' })
export class NotificationService {


  readonly baseUrl: string = 'https://sparta-clan.herokuapp.com'
  //readonly baseUrl: string = 'http://localhost:8080'

    constructor(private http: HttpClient) {

    }

    getNotifications(idUser: number, token: string) {

      //const token = localStorage.getItem('token');

      var header = {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${token}`)
      }

      const url = `${this.baseUrl}/spartaclan/getNotifications/${idUser}`

      return this.http.get<Notification[]>(url, header);
    }


}
