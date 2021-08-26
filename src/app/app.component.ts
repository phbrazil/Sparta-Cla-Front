import { Component } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services';
//import * as _ from 'call-of-duty-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;

  constructor(private accountService: AccountService){
    this.accountService.user.subscribe(x => this.user = x);
  }

  title = 'Sparta Clan';

  ngOnInit(): void{

  }
}
