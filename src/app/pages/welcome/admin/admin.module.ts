import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { WelcomeComponent } from '../welcome.component';
import { HeaderLoggedComponent } from '../header-logged/header-logged.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderLoggedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WelcomeComponent,
    HeaderLoggedComponent
  ]
})
export class AdminModule { }
