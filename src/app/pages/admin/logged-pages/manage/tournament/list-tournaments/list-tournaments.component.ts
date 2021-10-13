import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tournament } from 'src/app/_models/tournament';
import { AccountService, AlertService } from 'src/app/_services';
import { TournamentService } from 'src/app/_services/tournament.service';
import * as $ from 'jquery';
import { User } from 'src/app/_models/user';
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
  idTournament: number;
  user: User;

  constructor(private service: TournamentService, private router: Router, private alertService: AlertService,
    private accountService: AccountService) {

    this.accountService.user.subscribe(x => this.user = x);

  }

  ngOnInit(): void {

    this.findAllTournament();

  }

  ngOnChanges() {
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

  editTournament(id) {
    this.idTournament = id;
  }

  disableTournament(id) {
    this.idTournament = id;
  }

  confirmDisable() {

    this.service.disableTournament(this.idTournament, this.user.token).subscribe(res => {

      this.alertService.success(res.text, res.subText, { keepAfterRouteChange: true });

      //REMOVE FADE BUGADO QUE CONTINUAVA
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      $('#modalDisable').toggle();

      this.reloadCurrentRoute();

    }, err => {

      this.alertService.error(err.text, err.subText, { keepAfterRouteChange: true });

    })

  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}
