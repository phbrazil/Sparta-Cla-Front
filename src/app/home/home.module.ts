import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page/page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports: [
    PageComponent,
  ]
})
export class HomeModule { }
