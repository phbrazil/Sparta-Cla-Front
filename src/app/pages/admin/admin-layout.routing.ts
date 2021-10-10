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

export const AdminLayoutRoutes: Routes = [

    //NOVAS ROTAS INTERNAS DO SITE DEVEM SER INCLUIDAS AQUI
    { path: 'welcome', component: WelcomeComponent },
    { path: 'my-profile', component: ProfileComponent },
    { path: 'my-tournaments', component: TournamentComponent },
    { path: 'my-stats', component: MyStatsComponent },
    { path: 'confirm-registration', component: RegisterConfirmationComponent },
    { path: 'credits', component: CreditsComponent },
    { path: 'manage', component: ManageComponent },
    { path: 'new-tournament', component: NewTournamentComponent },
    { path: 'list-tournaments', component: ListTournamentsComponent },
    { path: 'list-users', component: ListUsersComponent },

];
