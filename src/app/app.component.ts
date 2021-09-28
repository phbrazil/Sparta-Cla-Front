import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AccountService } from './_services';
import { ModalControlService } from './_services/modal-control.service';
//declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  validationCode: string;

  constructor(private accountService: AccountService, private router: Router,
    private modalControl: ModalControlService,) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  title = 'Sparta Clã';

  ngOnInit(): void {


    this.modalControl.closeAllModals();

    //se logado direciona para a pagina inicial welcome
    if (this.user && !this.user.changePassword) {

      this.router.navigate(['/welcome']);

    }

  }
}
