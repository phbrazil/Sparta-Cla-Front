import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
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
  tournaments: Tournament[] = [];
  isLoading = false;
  idCamp: number;

  user: User;

  constructor(private service: TournamentService, private alertService: AlertService, private accountService: AccountService) {

    this.accountService.user.subscribe(x => this.user = x);

  }

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
      this.tournaments = res;
      this.isLoading = false;

    }, err => {

      this.isLoading = false;

      this.alertService.error('Ocorreu um erro', 'Tente novamente mais tarde');

    });
  }

  registerTournament(idCamp: number){

    this.idCamp = idCamp;

  }
}
