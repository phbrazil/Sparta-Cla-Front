import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ButtomComponent } from './components/buttom/buttom.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal-account/modal.component';
import { BannerAlertComponent } from './components/banner-alert/banner-alert.component';
import { AlertComponent } from './components/alert';
import { AccountModule } from '../pages/account/account.module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MessagesComponent } from './components/messages/messages.component';
import { ModalPublicComponent } from './components/modal-public/modal-public.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtomComponent,
    FooterComponent,
    ModalComponent,
    BannerAlertComponent,
    AlertComponent,
    ProgressBarComponent,
    MessagesComponent,
    ModalPublicComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountModule,
    AngularMaterialModule
  ],

  exports: [
    HeaderComponent,
    ButtomComponent,
    FooterComponent,
    ModalComponent,
    BannerAlertComponent,
    AlertComponent,
    ProgressBarComponent,
    MessagesComponent,
    ModalPublicComponent
  ]
})
export class SharedModule { }
