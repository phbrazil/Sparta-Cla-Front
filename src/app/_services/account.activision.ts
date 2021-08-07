import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AlertService } from './alert.service';

import * as _ from 'underscore';/*** OR simply:* import 'underscore';*/

import * as call from 'call-of-duty-api';

/*
https://docs.codapi.dev/modern-warfare/lifetime-statistics#warzone
*/

@Injectable({ providedIn: 'root' })
export class AccountActivision {
    

    constructor(
        private router: Router,
        private http: HttpClient,
        private alertService: AlertService
    ) {

    }

    activisionLogin(user: string) {

       const API = call.require('call-of-duty-api')({ platform: "psn" });


      /* API.MWBattleData('Lierrmm#2364').then(data => {
        console.log(data);  // see output
    }).catch(err => {
        console.log(err);
    });
    */


    }

}
