import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CasesComponent } from './cases/cases.component';
import { SubmitedCasesComponent } from './submited-cases/submited-cases.component';
import { AllCasesComponent } from './all-cases/all-cases.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    CasesComponent,
    SubmitedCasesComponent,
    AllCasesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule,
  ]
})
export class DashboardModule { }
