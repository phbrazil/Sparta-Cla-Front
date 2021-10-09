import { Component, OnInit } from '@angular/core';
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
      division: [0, [Validators.required]],
      cost: ['', [Validators.required]],
      active: [true, [Validators.required]]
    })

  }

}
