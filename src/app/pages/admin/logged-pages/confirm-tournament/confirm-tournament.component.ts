import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Tournament } from 'src/app/_models/tournament';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
import { PreviousRouteService } from 'src/app/_services/previous-route.service';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-confirm-tournament',
  templateUrl: './confirm-tournament.component.html',
  styleUrls: ['./confirm-tournament.component.css']
})
export class ConfirmTournamentComponent implements OnInit {

  isLoading = false;
  idCamp: number;
  tournament: Tournament;
  user: User;
  hasError: boolean = false;
  isInvited: boolean = true;
  isAccepted: boolean = false;

  constructor(private tournamentService: TournamentService, private alertService: AlertService,
    private activateRoute: ActivatedRoute, private router: Router,
    private previousRouteService: PreviousRouteService,
    public dialog: MatDialog, private accountService: AccountService,
    private route: ActivatedRoute,
    private location: Location) {

    this.accountService.user.subscribe(x => this.user = x);

  }

  ngOnInit(): void {

    this.getPreviousRoute();

  }

  checkInvite(idCamp: number, loggedUser: string) {

    //VERIFICA SE O USUARIO LOGADO REALMENTE FOI CONVIDADO PARA ESSE TORNEIO

    this.tournamentService.getSubscriptionByIdTour(idCamp).subscribe(members => {

      let membros = JSON.parse(members[0].membrosTime)

      if (membros.some(x => x.email === loggedUser)) {
        this.isInvited = true;
      } else {
        this.isInvited = false;
      }

    }, err => {

      console.log(err)
    })

  }

  getPreviousRoute() {

    const returnUrl = decodeURIComponent(this.location.path()).replace("?returnUrl=", "");

    this.previousRouteService.getPreviousURL().subscribe(url => {

      if (url != null && url.startsWith('/confirm-tournament')) {

        this.idCamp = Number(url.replace("/confirm-tournament/", ""));

        this.loadTournament();

      } else if (returnUrl.startsWith('/confirm-tournament')) {

        this.idCamp = Number(returnUrl.replace("/confirm-tournament/", ""))

        this.loadTournament();

      }

    })

  }

  checkIsAccepted(idCamp: number) {

    //VERIFICAR SE CONVITE JÁ FOI ACEITO

    this.isLoading = true;

    this.tournamentService.getSubscriptionByIdTour(idCamp).subscribe(res => {

      res.forEach(insc => {

        let membrosTime = JSON.parse(insc.membrosTime);

        membrosTime.forEach(membro => {

          if (membro.email == this.user.email && membro.confirmed) {

            this.isAccepted = true;
          }

        });

      });

      this.isLoading = false;

    }, err => {
      this.isLoading = false;
      console.log(err)
    })

  }

  loadTournament() {

    this.isLoading = true;

    if (this.idCamp != 0 && this.user) {

      this.tournamentService.getTournamentById(this.idCamp).subscribe(tournament => {

        this.checkInvite(tournament.idCamp, this.user.email);

        this.tournament = tournament;

        this.isLoading = false;

        this.checkIsAccepted(this.tournament.idCamp);

        this.router.navigate(['/my-tournaments']);

      }, err => {

        this.isLoading = false;

        this.router.navigate(['/welcome']);

      })
    } else {

      this.hasError = true;

      this.isLoading = false;

      this.router.navigate(['/my-tournaments']);

    }

  }

  confirm() {

    this.isLoading = true;

    this.tournamentService.confirmTournament(this.user.idUser, this.tournament.idCamp).subscribe(res => {

      this.dialog.closeAll();

      this.isLoading = false;

      this.reloadCurrentRoute(res);


    }, err => {

      this.isLoading = false;

      this.alertService.error(err.text, err.subText, { keepAfterRouteChange: true });

    })


  }

  reloadCurrentRoute(res: any) {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);

      this.alertService.success(res.text, res.subText, { keepAfterRouteChange: true });

    });
  }

  closeModal() {
    this.dialog.closeAll();
  }
}
