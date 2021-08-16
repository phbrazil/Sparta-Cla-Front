import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament } from '../_models/tournament'

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  readonly baseUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getTournament():Observable<Tournament[]> {
      return this.http.get<Tournament[]>(`${this.baseUrl}/game`);
  }

}
