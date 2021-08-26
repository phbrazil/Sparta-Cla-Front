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

const welcomeModule = () => import('./pages/welcome/admin/admin-routing.module').then(x => x.AdminRoutingModule);

const routes: Routes = [

  { path: '', component: PageComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'torneios', component: TournamentComponent },
  { path: 'regras', component: RulesComponent },
  { path: 'faq', component: FAQComponent},
  { path: 'politicas-de-privacidade', component: PrivacyPolicyComponent },
  { path: 'termos-de-uso', component: TermsComponent },
  { path: 'welcome', loadChildren: welcomeModule, canActivate: [AuthGuard]},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
