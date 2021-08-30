import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from './alert.service';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class ActivisionService {

    declare require: any;

    constructor(
        private http: HttpClient,
    ) {


    }



    /** Log a message with the MessageService */
    private log(message: string) {
        console.log(message);
    }

    /*
    https://www.npmjs.com/package/@marshallofsound/call-of-duty-api
    https://docs.codapi.dev/
    */

    getWarzoneInfo(username: string, platform: string, token: string): Observable<any[]> {

        //let url = `https://sparta-clan.herokuapp.com/spartaclan/getStats/${username}/${platform}`
        //let url = `http://localhost:8080/spartaclan/getStats/${username}/${platform}`

        let url = `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${username}/${platform}`
        const headers = new HttpHeaders()
            .set('x-rapidapi-host', `call-of-duty-modern-warfare.p.rapidapi.com`)
            .set('x-rapidapi-key', `75e0530bedmshbf71e4633fd28fep125b50jsn269fb6971b8d`)
            .set('Content-Type', `application/json`)

        return this.http.get<any>(url, { headers: headers });


    }


}
