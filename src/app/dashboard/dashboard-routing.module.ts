import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { HasroleguardGuard } from '../shared/role_guard/hasroleguard.guard';
import { AllCasesComponent } from './all-cases/all-cases.component';
import { CasesComponent } from './cases/cases.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SubmitedCasesComponent } from './submited-cases/submited-cases.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard, HasroleguardGuard],
        data: {
          role: ["admin"]
        }
      },
      {
        path: 'cases',
        component: CasesComponent,
        canActivate: [AuthGuard, HasroleguardGuard],
        data: {
          role: ["CSO"]
        }
      },

      {
        path: 'submitted-cases',
        component: SubmitedCasesComponent,
        canActivate: [AuthGuard, HasroleguardGuard],
        data: {
          role: ["SUPERVISOR"]
        }
      },
      {
        path: 'all-cases',
        component: AllCasesComponent,
        canActivate: [AuthGuard, HasroleguardGuard],
        data: {
          role: ["admin"]
        }
      },
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
