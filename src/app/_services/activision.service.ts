import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from './alert.service';
//import * as CallOfDuty from 'call-of-duty-api';
import API from '@callofduty/api'


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
    https://www.npmjs.com/package/@callofduty/api
    */

    async getWarzoneInfo(user: string, platformUser: string) {

        const CallOfDutyAPI = new API()

        const { xsrf, sso, atkn } = await CallOfDutyAPI.Authorize('pauloh2012sul@gmail.com', 'mortadela1')


        CallOfDutyAPI.UseTokens({ xsrf, sso, atkn })

        const { titleIdentities } = await CallOfDutyAPI.Identity()


        const { username, platform } = titleIdentities.find(identity => identity.title === 'mw')

        const profileData = await CallOfDutyAPI.Profile({ username: 'Batman#5003812', platform: 'psn' }, 'wz', 'mw')

        console.log(profileData)

        
        var $ = require('jquery');

        /*const headers = new HttpHeaders()
            .set('cache-control', 'no-cache')
            .set('content-type', 'application/json')
            .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');

        const body = {
            email: 'myemail@xyz.com',
            user_password: 'mypasss',
            token: 'my token'
        }*/

        return this.http
            //.get(this.url, body, { headers: headers })
                    .get(this.url)
            .subscribe(res => res);
    }




    //const API = require('call-of-duty-api')({ platform: platform });


    /*CallOfDuty.MWBattleData(user).then(data => {
        console.log(data);  // see output
    }).catch(err => {
        console.log(err);
    });*/



}
