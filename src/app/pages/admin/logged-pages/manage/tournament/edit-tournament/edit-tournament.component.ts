import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tournament } from 'src/app/_models/tournament';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
import { TournamentService } from 'src/app/_services/tournament.service';

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
    private accountService: AccountService) { }

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

  ngOnChanges(){

    if(this.id){

      let tournament: Tournament = {
        id: this.id,
        mode: 'Duo',
        date: '1990-01-01',
        award: '10 Créditos',
        duration: '1:30',
        start: '15:30',
        scoring: '2 melhores partidas',
        division: 10,
        cost: '20 Créditos',
        active: true
      }
      this.tournament = tournament;

      this.loadTournament();

    }
  }

  enviar(){

  }

  loadTournament(){

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
