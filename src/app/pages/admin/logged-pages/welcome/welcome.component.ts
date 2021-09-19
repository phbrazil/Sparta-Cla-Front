import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user'));

  firstName = "";

  constructor(private router: Router) { }

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

    }


  }

}
