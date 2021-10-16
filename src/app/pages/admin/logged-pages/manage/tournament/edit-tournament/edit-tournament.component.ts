import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tournament } from 'src/app/_models/tournament';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
import { TournamentService } from 'src/app/_services/tournament.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-edit-tournament',
  templateUrl: './edit-tournament.component.html',
  styleUrls: ['./edit-tournament.component.css']
})
export class EditTournamentComponent implements OnInit {

  formEditTournament: FormGroup;
  isLoading = false;
  isLoadingTournament = false;
  tournament: Tournament;
  user: User;
  @Input() idCamp: number;

  constructor(private fb: FormBuilder, private tournamentService: TournamentService, private alertService: AlertService,
    private accountService: AccountService, private router: Router) {

    this.accountService.user.subscribe(x => this.user = x);

  }

  ngOnInit(): void {

    this.formEditTournament = this.fb.group({
      idCamp: ['', [Validators.required]],
      mode: ['', [Validators.required]],
      date: ['', [Validators.required]],
      award: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      start: ['', [Validators.required]],
      scoring: ['', [Validators.required]],
      division: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      active: [true, [Validators.required]],
      times: ['', [Validators.required]]
    })

  }

  ngOnChanges() {

    if (this.idCamp) {

      this.isLoadingTournament = true;

      this.tournamentService.getTournamentById(this.idCamp).subscribe(tournament => {

        this.isLoadingTournament = false;

        this.tournament = tournament;

        this.loadTournament();

      }, err => {

        this.isLoadingTournament = false;

        console.log(err)

      })


    }
  }

  enviar() {

    this.isLoading = true;

    this.tournamentService.editTournament(this.formEditTournament.value).subscribe(res => {

      this.alertService.success(res.text, res.subText, { keepAfterRouteChange: true });

      this.isLoading = false;

      //REMOVE FADE BUGADO QUE CONTINUAVA
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      $('#modalEdit').toggle();

      this.reloadCurrentRoute();


    }, err => {

      this.isLoading = false;

      this.alertService.error(err.text, err.subText, { keepAfterRouteChange: true });

    })

  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


  loadTournament() {

    this.formEditTournament = this.fb.group({
      idCamp: [this.tournament.idCamp, [Validators.required]],
      mode: [this.tournament.mode, [Validators.required]],
      date: [this.tournament.date, [Validators.required]],
      award: [this.tournament.award, [Validators.required]],
      duration: [this.tournament.duration, [Validators.required]],
      start: [this.tournament.start, [Validators.required]],
      scoring: [this.tournament.scoring, [Validators.required]],
      division: [this.tournament.division, [Validators.required]],
      cost: [this.tournament.cost, [Validators.required]],
      active: [true, [Validators.required]],
      privateCamp: [false, [Validators.required]],
      times: [this.tournament.times, [Validators.required]]

    })
  }

}
