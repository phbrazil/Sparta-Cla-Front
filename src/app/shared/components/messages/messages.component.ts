import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  title: string = 'Atenção';
  subTitle: string = 'Devido às atualizações previstas do novo mapa, nossos dashboards não estão funcionando no momento.';

  constructor() { }

  ngOnInit(): void {
  }

}
