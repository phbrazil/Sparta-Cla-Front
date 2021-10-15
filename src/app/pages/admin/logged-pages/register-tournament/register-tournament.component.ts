import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tournament } from 'src/app/_models/tournament';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-register-tournament',
  templateUrl: './register-tournament.component.html',
  styleUrls: ['./register-tournament.component.css']
})
export class RegisterTournamentComponent implements OnInit {

  isLoading = false;

  formRegister: FormGroup;

  membrosTime: string[] = []

  membroTime: string;

  tournament: Tournament;

  @Input() idCamp: number;


  constructor(private fb: FormBuilder, private tournamentService: TournamentService) { }

  ngOnInit(): void {

    this.formRegister = this.fb.group({
      idInsc: ['', [Validators.required]],
      nomeTime: ['', [Validators.required]],
      membroTime: [''],
      membrosTime: [this.membrosTime, [Validators.required]],
      data: ['', [Validators.required]]
    })

  }

  ngOnChanges(){

    if(this.idCamp){

      this.isLoading = true;

      this.tournamentService.getTournamentById(this.idCamp).subscribe(tournament=>{

        this.isLoading = false;
        this.tournament = tournament;

      }, err=>{
        this.isLoading = false;
        console.log(err)
      })
    }
  }

  enviar(){


  }

  addTeamMember(){

    if(this.membroTime.includes('@') && this.membroTime.includes('.com')){

      this.membrosTime.push(this.membroTime);

      this.membroTime = '';

    }

  }

}
