import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AccountService, AlertService } from 'src/app/_services';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  isLoading = false;
  users: User[] = [];
  idUser: number;
  user: User;

  constructor(private accountService: AccountService, private alertService: AlertService, private router: Router) {

    this.accountService.user.subscribe(x => this.user = x);

  }

  ngOnInit(): void {

    this.findAllUsers();

  }

  ngOnChanges(){
    this.findAllUsers();
  }

  findAllUsers() {
    this.isLoading = true;
    this.accountService.getAllUsers().subscribe(users => {
      this.users = users;
      this.isLoading = false;

    }, err => {
      this.alertService.error('Ocorreu um erro', 'Tente novamente mais tarde', { keepAfterRouteChange: true });
      this.isLoading = false;
    });
  }

  editUser(idUser){
    this.idUser = idUser;
  }

  disableUser(idUser){
    this.idUser = idUser;
  }

  confirmDisable() {

    //this.accountService.disa(this.idUser).subscribe(res => {

      //this.alertService.success(res.text, res.subText, { keepAfterRouteChange: true });

      //REMOVE FADE BUGADO QUE CONTINUAVA
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      $('#modalDisable').toggle();

      this.reloadCurrentRoute();

    //}, err => {

      //this.alertService.error(err.text, err.subText, { keepAfterRouteChange: true });

    //})

  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}
