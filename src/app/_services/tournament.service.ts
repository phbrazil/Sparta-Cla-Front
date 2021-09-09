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

  readonly baseUrl: string = 'http://localhost:3000/game'
  //readonly baseUrl: string = 'https://sparta-clan.herokuapp.com/tournaments/getAll'
  //readonly baseUrl: string = 'http://localhost:8080/tournaments/getAll'

  constructor(private http: HttpClient) { }

  getTournament(pagina: number, qtdPagina: number):Observable<any[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('_page', pagina.toString());
    httpParams = httpParams.set('_limit', qtdPagina.toString());

    return this.http.get<Tournament[]>(this.baseUrl, {params: httpParams});
    //return this.http.get<Tournament[]>(`${this.baseUrl}`, {headers: this.headers});

    }


}
