import { RegisterConfirmationComponent } from './pages/admin/logged-pages/register-confirmation/register-confirmation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './pages/home/page.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { FAQComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
import { RulesComponent } from './pages/rules/rules.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { AuthGuard } from './_services/auth.guard';
import { LoggedPagesComponent } from './pages/admin/logged-pages/logged-pages.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmEmailComponent } from './pages/account/confirm-email/confirm-email.component';
import { NewPasswordComponent } from './pages/account/new-password/new-password.component';
import { ProfileComponent } from './pages/admin/logged-pages/profile/profile.component';
import { BuyCreditsComponent } from './pages/admin/logged-pages/buy-credits/buy-credits.component';
import { ChallengeComponent } from './pages/challenge/challenge.component';

const adminModule = () => import('./pages/admin/admin-layout.module').then(x => x.AdminLayoutModule);

const routes: Routes = [

  { path: '', component: PageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tournaments', component: TournamentComponent },
  { path: 'challenges', component: ChallengeComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'register', component: RegisterConfirmationComponent },
  { path: 'confirm', component: ConfirmEmailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'new-password', component: NewPasswordComponent },
  {
    path: '',
    component: LoggedPagesComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      loadChildren: adminModule
    }]
  },
  { path: '**', redirectTo: '' },
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: []
})
export class AppRoutingModule { }
