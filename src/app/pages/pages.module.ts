import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './home/page.component'
import { SharedModule } from '../shared/shared.module';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FAQComponent } from './faq/faq.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';



@NgModule({
  declarations: [
    PageComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    FAQComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccordionModule.forRoot()

  ],
  exports: [
    PageComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    FAQComponent
  ]
})
export class HomeModule { }
