import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/_services/tournament.service';
import { Tournament } from '../../_models/tournament';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  readonly qtdPagina = 6;
  pagina = 0;
  tournament: Tournament[] = [];
  tournaments;
  isLoading = false;

  constructor(private service: TournamentService) { }

  ngOnInit(): void {
    this.findAllTournament();
  }

  onScroll() {
    //this.findAllTournament();
    console.log('scrolled!!');
  }

  findAllTournament() {
    this.isLoading = true;
    //this.pagina++;
    //this.service.getTournament(this.pagina, this.qtdPagina).subscribe( (tournament: Tournament[]) => this.tournament.push(...tournament),
    this.service.getTournament(this.pagina, this.qtdPagina).subscribe(res => {
      this.tournaments = JSON.stringify(res)
      this.tournaments = JSON.parse(this.tournaments)
      this.tournament = this.tournaments.game;
      this.isLoading = false;

    }, err => {
      console.log("Ocorreu algum Erro", err);
      this.isLoading = false;
    });
  }
}
