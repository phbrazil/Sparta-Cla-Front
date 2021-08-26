import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_services/auth.guard';
import { WelcomeComponent } from '../welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent,
  canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
