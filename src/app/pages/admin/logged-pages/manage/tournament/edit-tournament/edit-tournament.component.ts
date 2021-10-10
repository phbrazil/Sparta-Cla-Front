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
  tournament: Tournament;
  user: User;
  @Input() id: number;

  constructor(private fb: FormBuilder, private tournamentService: TournamentService, private alertService: AlertService,
    private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {

    this.formEditTournament = this.fb.group({
      mode: ['', [Validators.required]],
      date: ['', [Validators.required]],
      award: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      start: ['', [Validators.required]],
      scoring: ['', [Validators.required]],
      division: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      active: [true, [Validators.required]]
    })

  }

  ngOnChanges() {

    if (this.id) {

      this.tournamentService.getTournamentById(this.id).subscribe(tournament =>{

        this.tournament = tournament;

        console.log(tournament)

        this.loadTournament();

      }, err =>{

        console.log(err)

      })


    }
  }

  enviar() {

    this.tournamentService.editTournament(this.formEditTournament.value).subscribe(res => {

      this.alertService.success(res.text, res.subText, { keepAfterRouteChange: true });

      //REMOVE FADE BUGADO QUE CONTINUAVA
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      $('#modalEdit').toggle();

    }, err => {

      this.alertService.success(err.text, err.subText, { keepAfterRouteChange: true });

    })

  }

  loadTournament() {

    this.formEditTournament = this.fb.group({
      mode: [this.tournament.mode, [Validators.required]],
      date: [this.tournament.date, [Validators.required]],
      award: [this.tournament.award, [Validators.required]],
      duration: [this.tournament.duration, [Validators.required]],
      start: [this.tournament.start, [Validators.required]],
      scoring: [this.tournament.scoring, [Validators.required]],
      division: [this.tournament.division, [Validators.required]],
      cost: [this.tournament.cost, [Validators.required]],
      active: [true, [Validators.required]]
    })
  }

}
