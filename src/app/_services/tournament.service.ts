import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AccountService } from '.';
import { Member } from '../_models/member';
import { Subscription } from '../_models/subscription';
import { Tournament } from '../_models/tournament'

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private idCamp = new BehaviorSubject<number>(null);


  public setIdCamp(idCamp: number): void{
    this.idCamp.next(idCamp);
  }

  public getIdCamp(): Observable<number>{
    return this.idCamp.asObservable();
  }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  readonly baseUrl: string = 'https://sparta-clan.herokuapp.com'
  //readonly baseUrl: string = 'http://localhost:8080'

  constructor(private http: HttpClient, private accountService: AccountService) { }

  getTournament(pagina: number, qtdPagina: number):Observable<any[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('_page', pagina.toString());
    httpParams = httpParams.set('_limit', qtdPagina.toString());

    return this.http.get<Tournament[]>(`${this.baseUrl}/tournaments/getAllTournaments`, {params: httpParams});

    }

    newTournament(body: Tournament) {

      //const token = localStorage.getItem('token');

      const token = this.accountService.getToken();

      const headers = { 'Authorization': `Bearer ${token}` }

      return this.http.post<any>(`${this.baseUrl}/tournaments/newTournament`, body, { headers });

    }

    registerTournament(body: any) {

      //SE REGISTRA NO TORNEIO E CONVIDA MEMBROS DO SQUAD

      //const token = localStorage.getItem('token');

      const token = this.accountService.getToken();

      const headers = { 'Authorization': `Bearer ${token}` }

      return this.http.post<any>(`${this.baseUrl}/tournaments/registerTournament`, body, { headers });

    }

    confirmTournament(idUser: number, idCamp: number) {

      //MEMBROS CONVIDADOS CONFIRMAM PARTICIPACAO NO TORNEIO

      //const token = localStorage.getItem('token');

      const token = this.accountService.getToken();

      const headers = { 'Authorization': `Bearer ${token}` }

      return this.http.post<any>(`${this.baseUrl}/tournaments/confirmTournament/${idUser}/${idCamp}`, { headers });

    }

    editTournament(body: TournamentService) {

      //const token = localStorage.getItem('token');

      const token = this.accountService.getToken();

      const headers = { 'Authorization': `Bearer ${token}` }

      return this.http.put<any>(`${this.baseUrl}/tournaments/editTournament`, body, { headers });

    }

    getTournamentById(id: number) {

      //const token = localStorage.getItem('token');

      const token = this.accountService.getToken();

      const headers = { 'Authorization': `Bearer ${token}` }

      return this.http.get<Tournament>(`${this.baseUrl}/tournaments/getTournament/${id}`, { headers });

    }

    getSubscriptionByIdUser(idUser: number) {

      //const token = localStorage.getItem('token');

      const token = this.accountService.getToken();

      const headers = { 'Authorization': `Bearer ${token}` }

      return this.http.get<Subscription[]>(`${this.baseUrl}/tournaments/getSubscriptionUser/${idUser}`, { headers });

    }

    getSubscriptionByIdTour(idCamp: number) {

      //const token = localStorage.getItem('token');

      const token = this.accountService.getToken();

      const headers = { 'Authorization': `Bearer ${token}` }

      return this.http.get<Subscription[]>(`${this.baseUrl}/tournaments/getSubscriptionTour/${idCamp}`, { headers });

    }

    getRecentMembers(idUser: number) {

      //const token = localStorage.getItem('token');

      const token = this.accountService.getToken();

      const headers = { 'Authorization': `Bearer ${token}` }

      return this.http.get<Member[]>(`${this.baseUrl}/tournaments/getRecentMembers/${idUser}`, { headers });

    }

    disableTournament(id: number) {

      //const token = localStorage.getItem('token');

      const token = this.accountService.getToken();

      const headers = { 'Authorization': `Bearer ${token}` }

      return this.http.delete<any>(`${this.baseUrl}/tournaments/disableTournament/${id}`, { headers });

    }


}
