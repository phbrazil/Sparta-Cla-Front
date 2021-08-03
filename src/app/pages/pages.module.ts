import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './home/page.component'
import { SharedModule } from '../shared/shared.module';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';



@NgModule({
  declarations: [
    PageComponent,
    TermsComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports: [
    PageComponent,
    TermsComponent,
    PrivacyPolicyComponent
  ]
})
export class HomeModule { }
