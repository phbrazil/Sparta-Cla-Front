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
import { SharedModule } from 'src/app/shared/shared.module';
import { NewTournamentComponent } from './logged-pages/manage/tournament/new-tournament/new-tournament.component';
import { ManageComponent } from './logged-pages/manage/manage.component';
import { ListTournamentsComponent } from './logged-pages/manage/tournament/list-tournaments/list-tournaments.component';
import { EditTournamentComponent } from './logged-pages/manage/tournament/edit-tournament/edit-tournament.component';
import { ListUsersComponent } from './logged-pages/manage/users/list-users/list-users.component';
import { EditUserComponent } from './logged-pages/manage/users/edit-user/edit-user.component';
import { ChartsModule } from 'ng2-charts';
import { MyTournamentsComponent } from './logged-pages/my-tournaments/my-tournaments.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ConfirmTournamentComponent } from './logged-pages/confirm-tournament/confirm-tournament.component';
import { NotificationsComponent } from './logged-pages/notifications/notifications.component';
import { BuyCreditsComponent } from './logged-pages/buy-credits/buy-credits.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderLoggedComponent,
    ProfileComponent,
    MyStatsComponent,
    RegisterConfirmationComponent,
    CreditsComponent,
    NewTournamentComponent,
    ManageComponent,
    ListTournamentsComponent,
    EditTournamentComponent,
    ListUsersComponent,
    EditUserComponent,
    MyTournamentsComponent,
    ConfirmTournamentComponent,
    NotificationsComponent,
    BuyCreditsComponent,
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(AdminLayoutRoutes),
    ChartsModule,
    AngularMaterialModule
  ], exports: [
    WelcomeComponent,
    HeaderLoggedComponent,
    ProfileComponent,
    MyStatsComponent,
    RegisterConfirmationComponent,
    BuyCreditsComponent
  ],
})
export class AdminLayoutModule { }
