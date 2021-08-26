import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.css']
})
export class HeaderLoggedComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {

    console.log('to logado')
  }

  logout(){
      
    this.accountService.logout();
}

}
