import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament } from '../_models/tournament'

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  //readonly baseUrl: string = 'http://localhost:3000'
  readonly baseUrl: string = 'https://sparta-clan.herokuapp.com/tournaments/getAll'
  //readonly baseUrl: string = 'http://localhost:8080/tournaments/getAll'

  constructor(private http: HttpClient) { }

  getTournament():Observable<any[]> {
      //return this.http.get<Tournament[]>(`${this.baseUrl}/game`);
      return this.http.get<Tournament[]>(`${this.baseUrl}`, {headers: this.headers});

    }


}
