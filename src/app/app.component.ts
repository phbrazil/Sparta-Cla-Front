import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  validationCode: string;

  constructor(private accountService: AccountService, private router: Router) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  title = 'Sparta Clan';

  ngOnInit(): void {

    //se logado direciona para a pagina inicial welcome
    if (this.user) {

      this.router.navigate(['/welcome']);

    }

  }
}
