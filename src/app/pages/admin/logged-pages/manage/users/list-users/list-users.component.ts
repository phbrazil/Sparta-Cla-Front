import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  isLoading = false;
  users: User[] = [];
  idUser: number;

  constructor(private accountService: AccountService) { }

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
      console.log("Ocorreu algum Erro", err);
      this.isLoading = false;
    });
  }

  editUser(idUser){
    this.idUser = idUser;
  }

  disableUser(idUser){
    this.idUser = idUser;
  }

}
