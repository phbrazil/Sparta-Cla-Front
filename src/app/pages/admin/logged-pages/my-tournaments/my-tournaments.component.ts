import { Component, OnInit } from '@angular/core';
import { Subscription } from 'src/app/_models/subscription';
import { Tournament } from 'src/app/_models/tournament';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-my-tournaments',
  templateUrl: './my-tournaments.component.html',
  styleUrls: ['./my-tournaments.component.css']
})
export class MyTournamentsComponent implements OnInit {


  tournaments: Tournament[] = [];
  subscriptions: Subscription[] = [];
  isLoading = false;
  user: User;

  merged: any[] = []

  constructor(private tournamentService: TournamentService,
    private alertService: AlertService,
    private accountService: AccountService) {

    this.accountService.user.subscribe(x => this.user = x);

  }
  ngOnInit(): void {

    this.getSubscriptions();

  }


  getSubscriptions() {

    this.isLoading = true;

    this.tournamentService.getSubscriptionByIdUser(this.user.idUser).subscribe(sub => {

      this.isLoading = false;

      this.subscriptions = sub;

      this.subscriptions.forEach(subscription => {

        this.getTournaments(subscription.idCamp, subscription);

      });

    }, err => {

      this.isLoading = false;

    })
  }

  getTournaments(idCamp: number, sub: Subscription) {

    this.isLoading = true;

    this.tournamentService.getTournamentById(idCamp).subscribe(tournament => {
      tournament.nomeTime = sub.nomeTime;
      tournament.membrosTime = JSON.parse(sub.membrosTime);
      tournament.data = sub.data;
      tournament.position = sub.position;
      tournament.membersConfirmed = sub.membersConfirmed;

      this.isLoading = false;

      this.tournaments.push(tournament);

      return tournament;

    }, err => {

      this.isLoading = false;

      return null;

    });
  }

}
