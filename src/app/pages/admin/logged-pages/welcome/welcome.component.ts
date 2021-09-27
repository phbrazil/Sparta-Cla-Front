import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: User;

  firstName = "";

  constructor(private router: Router, private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
   }

  ngOnInit(): void {

    let fullName = new String(this.user.nome);
    let len  = fullName.length;
    for (var i = 0; i < len; i++) {
      if (fullName[i] == ' ') {
        break;
      } else {
        this.firstName += fullName[i];
      }
    }

    //finalizar cadastro
    if(this.user.pendingRegistration && !this.user.pendingEmailConfirmation){

      this.router.navigate(['/confirm-registration']);

      //troca de senha necessária
    }


  }

}
