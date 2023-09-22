import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EpicService {

    declare require: any;

    readonly baseUrl: string = 'https://sparta-clan.herokuapp.com'
    //readonly baseUrl: string = 'http://localhost:8080'


    constructor(private http: HttpClient) {

    }

  
    getStats(fortniteProfile: string, platform: string): Observable<any> {

      let url = `${this.baseUrl}/stats/getFortniteStats/${fortniteProfile}/${platform}`

      const headers = new HttpHeaders().set('Content-Type', 'application/json')

      return this.http.get<any>(url, {headers: headers});

  }


}
