import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/_services/tournament.service';
import { Tournament } from '../../_models/tournament';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  tournament: Tournament[] = [];

  tournaments;

  isLoading = false;

  constructor(private service: TournamentService) { }

  ngOnInit(): void {
    this.findAllTournament();
  }

  findAllTournament() {
    this.isLoading = true;
    this.service.getTournament().subscribe(res => {

      this.tournaments = JSON.stringify(res)

      this.tournaments = JSON.parse(this.tournaments)

      this.tournament = this.tournaments.game;

      this.isLoading = false;

    }, err => {
      this.isLoading = false;
    })
  }

}
