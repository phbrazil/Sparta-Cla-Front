import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
import { TournamentService } from 'src/app/_services/tournament.service';
import { Tournament } from '../../../../../../_models/tournament';

@Component({
  selector: 'app-new-tournament',
  templateUrl: './new-tournament.component.html',
  styleUrls: ['./new-tournament.component.css']
})
export class NewTournamentComponent implements OnInit {

  formNewTournament: FormGroup;
  isLoading = false;
  tournament: Tournament;
  user: User;


  constructor(private fb: FormBuilder, private tournamentService: TournamentService, private alertService: AlertService,
    private accountService: AccountService) {

    this.accountService.user.subscribe(x => this.user = x);

   }

  ngOnInit(): void {

    this.formNewTournament = this.fb.group({
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

  enviar() {

    this.isLoading = true;

    this.tournamentService.newTournament(this.formNewTournament.value).subscribe(res =>{

      this.alertService.success(res.text, res.subText, { keepAfterRouteChange: true });

      this.isLoading = false;

      this.formNewTournament.reset();

    }, err => {

      this.alertService.error(err.text, err.subText, { keepAfterRouteChange: true });

      this.isLoading = false;


    })

  }

}
