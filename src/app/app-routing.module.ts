import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { 
    path: 'home', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule),
    // resolve: [IsLoggedIn]
  },
  { path: 'Dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), 
    // canActivate: [AuthGuard],
},

  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
