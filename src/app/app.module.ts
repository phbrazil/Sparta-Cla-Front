
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/pages.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing';
import { RouterModule } from '@angular/router';
import { LoggedPagesComponent } from './pages/admin/logged-pages/logged-pages.component';
import { HeaderLoggedComponent } from './pages/admin/logged-pages/header-logged/header-logged.component';
import { ProfileComponent } from './pages/admin/logged-pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/logged-pages/welcome/welcome.component';
import { AdminLayoutModule } from './pages/admin/admin-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    LoggedPagesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  AdminLayoutModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
