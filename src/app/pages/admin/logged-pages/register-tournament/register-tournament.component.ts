import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tournament } from 'src/app/_models/tournament';
import { User } from 'src/app/_models/user';
import { TournamentService } from 'src/app/_services/tournament.service';
import { AccountService, AlertService } from 'src/app/_services';
import * as $ from 'jquery';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register-tournament',
  templateUrl: './register-tournament.component.html',
  styleUrls: ['./register-tournament.component.css']
})
export class RegisterTournamentComponent implements OnInit {

  isLoading = false;

  isMaxMembers = false;

  formRegister: FormGroup;

  membrosTime: string[] = []

  membroTime: string;

  tournament: Tournament;

  user: User;

  idCamp: number;

  options: string[] = [];

  maxMembers = 0;



  constructor(private fb: FormBuilder, private tournamentService: TournamentService,
    private accountService: AccountService, private alertService: AlertService, public dialog: MatDialog) {

    this.accountService.user.subscribe(x => this.user = x);

  }

  ngOnInit(): void {

    this.formRegister = this.fb.group({
      idCamp: ['', [Validators.required]],
      idUser: ['', [Validators.required]],
      nomeTime: ['', [Validators.required]],
      membrosTime: [this.membrosTime, [Validators.required]],
      membroTime: [''],
      myControl: [''],

    })

    this.getTournamentInfo();

    this.getRecentMembers();

  }

  ngOnChanges() {

  }

  checkMaxMembers() {
    //VERIFICAR MAXIMO DE MEMBROS NO TORNEIO (INICIA NO 0)
    if (this.tournament.mode.includes('Squad')) {
      this.maxMembers = 3;
    } else if (this.tournament.mode.includes('Trio')) {
      this.maxMembers = 2;
    } else if (this.tournament.mode.includes('Duo')) {
      this.maxMembers = 1;
    } else if (this.tournament.mode.includes('Solo')) {
      this.maxMembers = 0;
    }
  }

  enviar() {


    this.isLoading = true;

    this.formRegister.patchValue({ idCamp: this.idCamp });
    this.formRegister.patchValue({ idUser: this.user.idUser });

    //FORMATA LISTA SIMPLES PARA UMA LISTA DE OBJETO JSON
    let membrosTime: { email: string, confirmed: boolean }[] = []

    this.membrosTime.forEach(element => {

      let membro = {
        email: element,
        confirmed: false
      }

      membrosTime.push(membro)

    });

    let membrosTimeString = JSON.stringify(membrosTime);

    this.formRegister.patchValue({ membrosTime: membrosTimeString });

    this.tournamentService.registerTournament(this.formRegister.value).subscribe(res => {


      this.clearForm();

      this.closeModalDialog();

      this.isLoading = false;

      //REMOVE FADE BUGADO QUE CONTINUAVA
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      $('#modalRegister').toggle();

      this.alertService.success(res.text, res.subText, { keepAfterRouteChange: true });

    }, err => {

      this.closeModalDialog();

      this.isLoading = false;

      this.alertService.error('Ocorreu um erro', 'Tente novamente mais tarde', { keepAfterRouteChange: true });

    })


  }

  addTeamMember() {

    console.log(this.membrosTime.length)
    console.log(this.maxMembers)
    console.log(this.isMaxMembers)

    if (this.membroTime && this.membroTime.includes('@') && this.membroTime.includes('.com')) {

      if (!this.membrosTime.includes(this.membroTime)) {

        if (this.membrosTime.length < this.maxMembers) {
          this.membrosTime.push(this.membroTime);

          this.membroTime = '';
        } else {

          this.isMaxMembers = true;

        }

      }

    }

  }

  removeMember(member: string){

    this.membrosTime = this.membrosTime.filter(item => item !== member)

  }

  clearForm() {

    this.formRegister.reset();
    this.membroTime = '';
    this.membrosTime = [];

  }

  getRecentMembers() {

    this.tournamentService.getRecentMembers(this.user.idUser).subscribe(res => {

      res.forEach(member => {

        if (!this.options.includes(member.email)) {
          this.options.push(member.email)
        }

      });
    })
  }

  closeModalDialog() {

    this.dialog.closeAll();

  }

  getTournamentInfo() {

    this.tournamentService.getIdCamp().subscribe(idCamp => {

      this.idCamp = idCamp;

      if (this.idCamp) {

        this.clearForm();

        this.isLoading = true;

        this.tournamentService.getTournamentById(this.idCamp).subscribe(tournament => {

          this.isLoading = false;
          this.tournament = tournament;

          this.checkMaxMembers();

        }, err => {
          this.isLoading = false;
          console.log(err)
        })
      }
    })
  }
}
