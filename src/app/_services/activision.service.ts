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


    getWarzoneInfoRapidAPI(username: string, platform: string, token: string): Observable<any[]> {

        //let url = `https://sparta-clan.herokuapp.com/spartaclan/getStats/${username}/${platform}`
        //let url = `http://localhost:8080/spartaclan/getStats/${username}/${platform}`

       // let url = `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${username}/${platform}`

       let url: string = 'http://localhost:3000'


        const headers = new HttpHeaders()
            .set('x-rapidapi-host', `call-of-duty-modern-warfare.p.rapidapi.com`)
            .set('x-rapidapi-key', `75e0530bedmshbf71e4633fd28fep125b50jsn269fb6971b8d`)
            .set('Content-Type', `application/json`)

        return this.http.get<any>(url, { headers: headers });


    }

    getWarzoneInfoCloudFunction(gamerTag: string, platform: string): Observable<any> {

      //let url = `https://us-central1-cyber-oficina.cloudfunctions.net/warzone-stats`
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
