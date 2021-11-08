import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'src/app/_models/subscription';
import { TableService } from 'src/app/_services/table.service';
import { TournamentService } from 'src/app/_services/tournament.service';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.component.html',
  styleUrls: ['./table-result.component.css']
})
export class TableResultComponent implements OnInit {

  idCamp: number;
  subscriptions: Subscription[] = []
  members: string[] = [];

  constructor(private pontuacao: TableService, private route: ActivatedRoute, private tournamentService: TournamentService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idCamp = +params.get('idCamp')
      this.getSubscription(this.idCamp);
    })


    //this.getPontuacao();
  }


  getSubscription(idCamp: number){

    this.tournamentService.getSubscriptionByIdTour(idCamp).subscribe(res =>{

        this.subscriptions = res;

        this.subscriptions.forEach(sub => {

          let members =  JSON.parse(sub.membrosTime);

          members.forEach(member => {

            this.members.push(member.email)

          });

        });

    })

  }


  getPontuacao() {
    this.pontuacao.getTable().subscribe(res => {
      this.subscriptions = res;
    }, err => {
      console.log(err);
    })
  }

}
