import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import { ChallengeComponent } from './admin/logged-pages/challenge/challenge.component';
import { TabViewModule } from 'primeng/tabview';



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
    ChallengeComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    AngularMaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TabViewModule
  ],
  exports: [
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
