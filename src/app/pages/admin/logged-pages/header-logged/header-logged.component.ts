import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.css']
})
export class HeaderLoggedComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {

  }

  logout(){

    this.accountService.logout();
}

}
