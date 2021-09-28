
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
import { AdminLayoutModule } from './pages/admin/admin-layout.module';
import { InterceptorModule } from './_services/interceptor.module';
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
    AdminLayoutModule,
    InterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
