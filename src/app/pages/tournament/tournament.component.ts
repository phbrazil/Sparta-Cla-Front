import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'src/app/_models/subscription';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
import { TournamentService } from 'src/app/_services/tournament.service';
import { Tournament } from '../../_models/tournament';
import { RegisterTournamentComponent } from '../admin/logged-pages/register-tournament/register-tournament.component';

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

  constructor(private service: TournamentService, private alertService: AlertService, private accountService: AccountService,
    public dialog: MatDialog) {

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

      if(this.user){
        this.checkSubscribed();
      }

    }, err => {

      this.isLoading = false;

      this.alertService.error('Ocorreu um erro', 'Tente novamente mais tarde');

    });
  }

  registerTournament(idCamp: number){

    this.idCamp = idCamp;

    this.service.setIdCamp(this.idCamp);

    this.openSubscribeModal();

  }

  openSubscribeModal() {

    //SE PASSA DIRETAMENTE O COMPONENTE A SER ABERTO DENTRO DO MODAL
    const dialogRef = this.dialog.open(RegisterTournamentComponent);

    dialogRef.afterClosed().subscribe(result => {

      this.findAllTournament();

      console.log(`Dialog result: ${result}`);
    });
  }

  checkSubscribed(){

    this.isLoading = true;

    let subscribed: Subscription[] = [];

    this.service.getSubscriptionByIdUser(this.user.idUser).subscribe(res =>{

      subscribed = res;

      this.tournaments.forEach(tournament => {

        if(subscribed.some(x=> x.idCamp === tournament.idCamp)){

          tournament.subscribed = true;

          }else{

            tournament.subscribed = false;

          }

      });

      this.isLoading = false;

    }, err => {

      this.isLoading = false;

    })

  }

}


