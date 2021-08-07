import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ButtomComponent } from './components/buttom/buttom.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtomComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    HeaderComponent,
    ButtomComponent,
    FooterComponent,
    ModalComponent
  ]
})
export class SharedModule { }
