import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from '../utils/Constants';
import { retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ActivisionService {

    declare require: any;
    private isPublic = new BehaviorSubject<boolean>(true);

    readonly baseUrl: string = 'https://sparta-clan.herokuapp.com'
    //readonly baseUrl: string = 'http://localhost:8080'


    constructor(private http: HttpClient) {

    }

    public setPublicStatus(status: boolean): void{
      this.isPublic.next(status);
    }

    public getPublicStatus(): Observable<boolean>{
      return this.isPublic.asObservable();
    }

    checkPublicStatus(gamerTag: string, platform: string){

      this.getWarzoneInfoCloudFunction(gamerTag, platform)
      .pipe(
        retry(3), // you retry 3 times
      )
      .subscribe(res =>{

        console.log(res)

        this.setPublicStatus(true);

      }, err =>{

        this.setPublicStatus(false);

      })

    }


    /** Log a message with the MessageService */
    private log(message: string) {
        console.log(message);
    }

    /*
    https://www.npmjs.com/package/@marshallofsound/call-of-duty-api
    https://docs.codapi.dev/
    */

    //json-server --watch stats_example.json


    getWarzoneInfoCloudFunction(gamerTag: string, platform: string): Observable<any> {

      let url = `${this.baseUrl}/stats/getStats/${gamerTag}/${platform}`

      //LOCAL FAKE BACKEND
      //let url = 'http://localhost:3000/stats';

      //local node function
      //let url = 'http://localhost:3000/';


      const body = {
        //"email": email,
        //"password": password,
        "gamerTag": gamerTag,
        "platform": platform,
        "SSOToken": Constants.SSOToken
      }

      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')

      //JSON SERVER LOCAL
      //return this.http.get<any>(url);

      //return this.http.post<any>(url, JSON.stringify(body), {headers: headers});

      return this.http.get<any>(url, {headers: headers});

  }


}
