import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalAngularMaterialComponent } from 'src/app/shared/components/modal-angular-material/modal-angular-material.component';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
import { TournamentService } from 'src/app/_services/tournament.service';
import { Tournament } from '../../_models/tournament';
import { RegisterTournamentComponent } from '../admin/logged-pages/register-tournament/register-tournament.component';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

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

    const dialogRef = this.dialog.open(RegisterTournamentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


