import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ButtomComponent } from './components/buttom/buttom.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { BannerAlertComponent } from './components/banner-alert/banner-alert.component';
import { AlertComponent } from './components/alert';
import { AccountModule } from '../pages/account/account.module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtomComponent,
    FooterComponent,
    ModalComponent,
    BannerAlertComponent,
    AlertComponent,
    ProgressBarComponent
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
    ProgressBarComponent
  ]
})
export class SharedModule { }
