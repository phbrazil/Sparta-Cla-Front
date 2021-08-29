import { Routes } from "@angular/router";
import { TournamentComponent } from "../tournament/tournament.component";
import { ProfileComponent } from "./logged-pages/profile/profile.component";
import { WelcomeComponent } from "./logged-pages/welcome/welcome.component";

export const AdminLayoutRoutes: Routes = [

    //NOVAS ROTAS INTERNAS DO SITE DEVEM SER INCLUIDAS AQUI
    { path: 'welcome', component: WelcomeComponent },
    { path: 'my-profile', component: ProfileComponent },
    { path: 'my-tournaments', component: TournamentComponent },

];