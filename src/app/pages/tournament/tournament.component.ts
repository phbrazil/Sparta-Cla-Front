import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/_services/tournament.service';
import { Tournament } from '../../_models/tournament';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  tournament: Tournament[] = []

  constructor(private service: TournamentService) { }

  ngOnInit(): void {
    this.findAllTournament();
  }

  findAllTournament() {
    this.service.getTournament().subscribe(res => {
      console.log(res);
      this.tournament = res;

    })
  }

}
