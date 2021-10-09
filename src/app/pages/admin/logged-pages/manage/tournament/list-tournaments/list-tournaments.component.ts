import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/_models/tournament';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-list-tournaments',
  templateUrl: './list-tournaments.component.html',
  styleUrls: ['./list-tournaments.component.css']
})
export class ListTournamentsComponent implements OnInit {

  readonly qtdPagina = 6;
  pagina = 0;
  tournaments: Tournament[] = [];
  isLoading = false;
  idTournament: string;

  constructor(private service: TournamentService) { }

  ngOnInit(): void {

    this.findAllTournament();

  }

  findAllTournament() {
    this.isLoading = true;
    //this.pagina++;
    //this.service.getTournament(this.pagina, this.qtdPagina).subscribe( (tournament: Tournament[]) => this.tournament.push(...tournament),
    this.service.getTournament(this.pagina, this.qtdPagina).subscribe(res => {
      this.tournaments = res;
      this.isLoading = false;

    }, err => {
      console.log("Ocorreu algum Erro", err);
      this.isLoading = false;
    });
  }

  editTournament(id){
    console.log(id)
    this.idTournament = id;
  }

}
