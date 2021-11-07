import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tournament } from 'src/app/_models/tournament';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
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
  tournament: Tournament;
  user: User;
  hasError: boolean  = false;
  isInvited: boolean = true;

  constructor(private tournamentService: TournamentService, private alertService: AlertService,
    private activateRoute: ActivatedRoute, private router: Router,
    private previousURLService: PreviousURLService,
    public dialog: MatDialog, private accountService: AccountService) {

      this.accountService.user.subscribe(x => this.user = x);

     }

  ngOnInit(): void {

    this.loadTournament();

  }

  checkInvite(idCamp: number, loggedUser: string){

    //VERIFICA SE O USUARIO LOGADO REALMENTE FOI CONVIDADO PARA ESSE TORNEIO

    this.tournamentService.getSubscriptionByIdTour(idCamp).subscribe(members =>{

      let membros = JSON.parse(members[0].membrosTime)

      if(membros.some(x => x.email === loggedUser)){
        this.isInvited = true;
      }else{
        this.isInvited = false;
      }

    }, err => {


    })

  }

  loadTournament(){

    this.isLoading = true;

    //REFATORAR ESSE CODIGO USANDO QUERY PARAM DO ANGULAR
    //https://angular.io/guide/router

    this.previousURLService.getPreviousURL().subscribe(url => {

      let urlP = new URL(`https://www.spartacla.com.br${url}`);

      this.idTournament = Number(urlP.searchParams.get("id"));

      this.tournamentService.getTournamentById(this.idTournament).subscribe(tournament => {

        this.checkInvite(tournament.idCamp, this.user.email);

        this.tournament = tournament;

        this.isLoading = false;

      }, err => {

        this.isLoading = false;

        this.router.navigate(['/welcome']);

      })

    }, err => {
      this.isLoading = false;

    });

  }

  confirm() {

    this.isLoading = true;

    let body = {

      "idUser": this.user.idUser,
      "idCamp": this.tournament.idCamp

    }

    this.tournamentService.confirmSubscribeTour(body).subscribe(res =>{

      this.isLoading = false;

    }, err =>{

      this.isLoading = false;

      this.alertService.error('Ocorreu um erro', 'Tente novamente mais tarde', { keepAfterRouteChange: true });

    })


  }

  closeModal(){
    this.dialog.closeAll();
  }
}
