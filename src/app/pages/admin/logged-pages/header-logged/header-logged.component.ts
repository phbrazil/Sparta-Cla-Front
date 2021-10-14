import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.css']
})
export class HeaderLoggedComponent implements OnInit {

  user: User;
  notifications: Notification[];

  constructor(private accountService: AccountService, private notificationService: NotificationService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {

    this.getNotifications();

  }

  logout() {

    this.accountService.logout();
  }

  getNotifications() {

    this.notificationService.getNotifications(this.user.idUser, this.user.token).subscribe(res => {
      this.notifications = res;
    }, err => {
      console.log(err)
    })

  }

}
