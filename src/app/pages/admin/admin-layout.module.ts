import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../pages.module';
import { WelcomeComponent } from './logged-pages/welcome/welcome.component';
import { HeaderLoggedComponent } from './logged-pages/header-logged/header-logged.component';
import { ProfileComponent } from './logged-pages/profile/profile.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { MyStatsComponent } from './logged-pages/my-stats/my-stats.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderLoggedComponent,
    ProfileComponent,
    MyStatsComponent  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forChild(AdminLayoutRoutes),

  ],exports: [
    WelcomeComponent,
    HeaderLoggedComponent,
    ProfileComponent,
    MyStatsComponent  ],
})
export class AdminLayoutModule { }
