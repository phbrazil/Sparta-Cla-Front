import { Routes } from "@angular/router";
import { TournamentComponent } from "../tournament/tournament.component";
import { MyStatsComponent } from "./logged-pages/my-stats/my-stats.component";
import { ProfileComponent } from "./logged-pages/profile/profile.component";
import { RegisterConfirmationComponent } from "./logged-pages/register-confirmation/register-confirmation.component";
import { WelcomeComponent } from "./logged-pages/welcome/welcome.component";

export const AdminLayoutRoutes: Routes = [

    //NOVAS ROTAS INTERNAS DO SITE DEVEM SER INCLUIDAS AQUI
    { path: 'welcome', component: WelcomeComponent },
    { path: 'my-profile', component: ProfileComponent },
    { path: 'my-tournaments', component: TournamentComponent },
    { path: 'my-stats', component: MyStatsComponent },
    { path: 'confirm-registration', component: RegisterConfirmationComponent },

];
