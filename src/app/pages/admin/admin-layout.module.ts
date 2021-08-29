import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../pages.module';
import { LoggedPagesComponent } from './logged-pages/logged-pages.component';
import { WelcomeComponent } from './logged-pages/welcome/welcome.component';
import { HeaderLoggedComponent } from './logged-pages/header-logged/header-logged.component';
import { ProfileComponent } from './logged-pages/profile/profile.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';


@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderLoggedComponent,
    ProfileComponent  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forChild(AdminLayoutRoutes),
    
  ],exports: [
    WelcomeComponent,
    HeaderLoggedComponent,
    ProfileComponent  ],
})
export class AdminLayoutModule { }
