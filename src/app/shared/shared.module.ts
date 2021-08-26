import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ButtomComponent } from './components/buttom/buttom.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { BannerAlertComponent } from './components/banner-alert/banner-alert.component';
import { LoginModule } from '../pages/account/login/login.module';




@NgModule({
  declarations: [
    HeaderComponent,
    ButtomComponent,
    FooterComponent,
    ModalComponent,
    BannerAlertComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginModule

  ],

  exports: [
    HeaderComponent,
    ButtomComponent,
    FooterComponent,
    ModalComponent,
    BannerAlertComponent
  ]
})
export class SharedModule { }
