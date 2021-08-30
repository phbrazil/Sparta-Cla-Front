import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-alert',
  templateUrl: './banner-alert.component.html',
  styleUrls: ['./banner-alert.component.css']
})
export class BannerAlertComponent implements OnInit {

  @Input()
  title = "Apoie nosso projeto";

  @Input()
  subtitle = "Nos apoie doando qualquer quantia ou compartilhando com amigos";

  constructor() { }

  ngOnInit(): void {
  }

  doacao() {
    window.open("http://vaka.me/2351962", "_blank");
  }

}
