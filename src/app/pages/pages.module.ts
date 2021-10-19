import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PageComponent } from './home/page.component';
import { SharedModule } from '../shared/shared.module';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FAQComponent } from './faq/faq.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AboutComponent } from './about/about.component';
import { RulesComponent } from './rules/rules.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TableResultComponent } from './table-result/table-result.component';
import { RegisterTournamentComponent } from './admin/logged-pages/register-tournament/register-tournament.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';



@NgModule({
  declarations: [
    PageComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    FAQComponent,
    AboutComponent,
    RulesComponent,
    TournamentComponent,
    TableResultComponent,
    RegisterTournamentComponent,
    ],
  imports: [
    CommonModule,
    SharedModule,
    AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    AngularMaterialModule
  ],
  exports: [
    PageComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    FAQComponent,
    AboutComponent,
    RulesComponent,
    TournamentComponent,
    RegisterTournamentComponent,
  ]
})
export class HomeModule { }
