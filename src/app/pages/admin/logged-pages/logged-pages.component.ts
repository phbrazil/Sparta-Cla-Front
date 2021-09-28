import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-logged-pages',
  templateUrl: './logged-pages.component.html',
  styleUrls: ['./logged-pages.component.css']
})
export class LoggedPagesComponent implements OnInit {

  user: User

  constructor() { }

  ngOnInit(): void {
  }

}
