import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarToggleService {

  public static sidebarVisible: boolean = false;

  constructor() { }


}
