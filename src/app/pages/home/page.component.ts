import { Component, OnInit } from '@angular/core';
import { AccountActivision } from 'src/app/_services/account.activision';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private activisionService: AccountActivision) { }

  ngOnInit(): void {

    this.activisionService.activisionLogin('Lierrmm');
  }

}
