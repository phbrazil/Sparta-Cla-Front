import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtomComponent } from './components/buttom/buttom.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtomComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    HeaderComponent,
    ButtomComponent
  ]
})
export class SharedModule { }
