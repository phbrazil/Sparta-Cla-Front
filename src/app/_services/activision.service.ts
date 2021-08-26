﻿import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from './alert.service';
//import * as CallOfDuty from 'call-of-duty-api';

@Injectable({ providedIn: 'root' })
export class ActivisionService {

    declare require: any;

    url: string = 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/iShot%2321899/profile/type/mp';

    constructor(
        private router: Router,
        private http: HttpClient,
        private alertService: AlertService,
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

    getWarzoneInfo(user: string, platform: string) {



        var $ = require('jquery');

        const headers = new HttpHeaders()
            .set('cache-control', 'no-cache')
            .set('content-type', 'application/json')
            .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');

        const body = {
            email: 'myemail@xyz.com',
            user_password: 'mypasss',
            token: 'my token'
        }

        return this.http
            //.get(this.url, body, { headers: headers })
                    .get(this.url)
            .subscribe(res => res);
    

    }


}