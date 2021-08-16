import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './home/page.component';
import { SharedModule } from '../shared/shared.module';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FAQComponent } from './faq/faq.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AboutComponent } from './about/about.component';
import { RulesComponent } from './rules/rules.component';
import { TournamentComponent } from './tournament/tournament.component';



@NgModule({
  declarations: [
    PageComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    FAQComponent,
    AboutComponent,
    RulesComponent,
    TournamentComponent,
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
    FAQComponent,
    AboutComponent,
    RulesComponent,
    TournamentComponent
  ]
})
export class HomeModule { }
