import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome.component';
import { HeaderLoggedComponent } from '../header-logged/header-logged.component';
import { HomeModule } from '../../pages.module';


@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderLoggedComponent
  ],
  imports: [
    CommonModule,
    HomeModule
    
  ],
  exports: [
    WelcomeComponent,
    HeaderLoggedComponent
  ]
})
export class AdminModule { }
