import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtomComponent } from './components/buttom/buttom.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtomComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    HeaderComponent,
    ButtomComponent,
    FooterComponent
  ]
})
export class SharedModule { }
