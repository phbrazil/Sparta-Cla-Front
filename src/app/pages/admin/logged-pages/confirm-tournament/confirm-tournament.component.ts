import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tournament } from 'src/app/_models/tournament';
import { AlertService } from 'src/app/_services';
import { PreviousURLService } from 'src/app/_services/previous-url.service';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-confirm-tournament',
  templateUrl: './confirm-tournament.component.html',
  styleUrls: ['./confirm-tournament.component.css']
})
export class ConfirmTournamentComponent implements OnInit {

  isLoading = false;
  idTournament: number;
  tournament: Tournament

  constructor(private tournamentService: TournamentService, private alertService: AlertService,
    private activateRoute: ActivatedRoute, private router: Router,
    private previousURLService: PreviousURLService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

 //   this.dialog.open(ConfirmTournamentComponent);

    this.loadTournament();
  }

  loadTournament(){

    this.isLoading = true;

    //REFATORAR ESSE CODIGO USANDO QUERY PARAM DO ANGULAR
    //https://angular.io/guide/router

    this.previousURLService.getPreviousURL().subscribe(url => {

      console.log(url)

      let urlP = new URL(`https://www.spartacla.com.br${url}`);

      this.idTournament = Number(urlP.searchParams.get("id"));

      this.tournamentService.getTournamentById(this.idTournament).subscribe(tournament => {

        this.tournament = tournament;

        this.isLoading = false;

      }, err => {

        this.isLoading = false;

        this.router.navigate(['/welcome']);
        console.log('1', err)

      })

    }, err => {
      this.isLoading = false;

      console.log('2', err)

    });

  }

  confirm() {

    this.isLoading = true;

  }
}
