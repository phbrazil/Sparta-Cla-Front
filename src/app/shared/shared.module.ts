import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal-account/modal.component';
import { BannerAlertComponent } from './components/banner-alert/banner-alert.component';
import { AlertComponent } from './components/alert';
import { AccountModule } from '../pages/account/account.module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MessagesComponent } from './components/messages/messages.component';
import { ModalPublicComponent } from './components/modal-public/modal-public.component';
import { WarzoneSearchComponent } from './components/warzone-search/warzone-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarzoneResultComponent } from '../pages/warzone-result/warzone-result.component';
import { FortniteSearchComponent } from './components/fortnite-search/fortnite-search.component';
import { FortniteResultComponent } from '../pages/fortnite-result/fortnite-result.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    ModalComponent,
    BannerAlertComponent,
    AlertComponent,
    ProgressBarComponent,
    MessagesComponent,
    ModalPublicComponent,
    WarzoneSearchComponent,
    WarzoneResultComponent,
    FortniteSearchComponent,
    FortniteResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    ModalComponent,
    BannerAlertComponent,
    AlertComponent,
    ProgressBarComponent,
    MessagesComponent,
    ModalPublicComponent,
    WarzoneSearchComponent,
    WarzoneResultComponent,
    FortniteSearchComponent,
    FortniteResultComponent
  ]
})
export class SharedModule { }
