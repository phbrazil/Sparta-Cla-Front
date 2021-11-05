import { Routes } from "@angular/router";
import { TournamentComponent } from "../tournament/tournament.component";
import { CreditsComponent } from "./logged-pages/credits/credits.component";
import { ManageComponent } from "./logged-pages/manage/manage.component";
import { MyStatsComponent } from "./logged-pages/my-stats/my-stats.component";
import { NewTournamentComponent } from "./logged-pages/manage/tournament/new-tournament/new-tournament.component";
import { ProfileComponent } from "./logged-pages/profile/profile.component";
import { RegisterConfirmationComponent } from "./logged-pages/register-confirmation/register-confirmation.component";
import { WelcomeComponent } from "./logged-pages/welcome/welcome.component";
import { ListTournamentsComponent } from "./logged-pages/manage/tournament/list-tournaments/list-tournaments.component";
import { ListUsersComponent } from "./logged-pages/manage/users/list-users/list-users.component";
import { MyTournamentsComponent } from "./logged-pages/my-tournaments/my-tournaments.component";
import { ConfirmTournamentComponent } from "./logged-pages/confirm-tournament/confirm-tournament.component";
import { NotificationsComponent } from "./logged-pages/notifications/notifications.component";

export const AdminLayoutRoutes: Routes = [

    //NOVAS ROTAS INTERNAS DO SITE DEVEM SER INCLUIDAS AQUI
    { path: 'welcome', component: WelcomeComponent },
    { path: 'my-profile', component: ProfileComponent },
    { path: 'tournaments', component: TournamentComponent },
    { path: 'my-tournaments', component: MyTournamentsComponent },
    { path: 'my-stats', component: MyStatsComponent },
    { path: 'confirm-registration', component: RegisterConfirmationComponent },
    { path: 'credits', component: CreditsComponent },
    { path: 'manage', component: ManageComponent },
    { path: 'new-tournament', component: NewTournamentComponent },
    { path: 'list-tournaments', component: ListTournamentsComponent },
    { path: 'list-users', component: ListUsersComponent },
    { path: 'confirm-tournament', component: ConfirmTournamentComponent },
    { path: 'notifications', component: NotificationsComponent },

];
