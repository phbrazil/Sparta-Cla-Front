import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../pages.module';
import { WelcomeComponent } from './logged-pages/welcome/welcome.component';
import { HeaderLoggedComponent } from './logged-pages/header-logged/header-logged.component';
import { ProfileComponent } from './logged-pages/profile/profile.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { MyStatsComponent } from './logged-pages/my-stats/my-stats.component';
import { RegisterConfirmationComponent } from './logged-pages/register-confirmation/register-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditsComponent } from './logged-pages/credits/credits.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderLoggedComponent,
    ProfileComponent,
    MyStatsComponent,
    RegisterConfirmationComponent,
    CreditsComponent],
  imports: [
    CommonModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),

  ], exports: [
    WelcomeComponent,
    HeaderLoggedComponent,
    ProfileComponent,
    MyStatsComponent,
    RegisterConfirmationComponent],
})
export class AdminLayoutModule { }
