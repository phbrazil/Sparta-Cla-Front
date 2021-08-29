import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  
  user: User;

  constructor(private accountService: AccountService) {

    this.accountService.user.subscribe(x => this.user = x);

    this.user.wzProfile = 'paulo_9ember'

   }

  ngOnInit(): void {
  }

}
