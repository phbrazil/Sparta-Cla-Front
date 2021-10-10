import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  //readonly baseUrl: string = 'http://localhost:3000/game'
  readonly baseUrl: string = 'https://sparta-clan.herokuapp.com/tournaments/getAllTournaments'
  //readonly baseUrl: string = 'http://localhost:8080/tournaments/getAllTournaments'

  constructor(private http: HttpClient) { }

  getTournament(pagina: number, qtdPagina: number):Observable<any[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('_page', pagina.toString());
    httpParams = httpParams.set('_limit', qtdPagina.toString());

    return this.http.get<Tournament[]>(this.baseUrl, {params: httpParams});
    //return this.http.get<Tournament[]>(`${this.baseUrl}`, {headers: this.headers});

    }

    newTournament(body: Tournament) {

      const token = localStorage.getItem('token');

      const headers = { 'Authorization': `Bearer ${token}` }

      //return this.http.post<any>('http://localhost:8080/tournaments/newTournament', body, { headers });

      return this.http.post<any>('https://sparta-clan.herokuapp.com/tournaments/newTournament', body, { headers });

    }

    editTournament(body: Tournament) {

      const token = localStorage.getItem('token');

      const headers = { 'Authorization': `Bearer ${token}` }

      //return this.http.put<any>('http://localhost:8080/tournaments/editTournament', body, { headers });

      return this.http.put<any>('https://sparta-clan.herokuapp.com/tournaments/editTournament', body, { headers });

    }

    getTournamentById(id: number) {

      const token = localStorage.getItem('token');

      const headers = { 'Authorization': `Bearer ${token}` }

      //return this.http.post<any>('http://localhost:8080/tournaments/getTournament', body, { headers });

      return this.http.get<Tournament>(`https://sparta-clan.herokuapp.com/tournaments/getTournament/${id}`, { headers });

    }


}
