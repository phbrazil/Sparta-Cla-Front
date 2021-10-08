import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService) {

    this.accountService.user.subscribe(x => this.user = x);

   }

  ngOnInit(): void {
  }

}
