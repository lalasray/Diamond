import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveComponent } from './leave/leave.component';
import { PayslipComponent } from './payslip/payslip.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from "@angular/material/tabs";

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';


const routes = [
  { path: '', component: DashboardComponent },
  { path: '', component: HeaderComponent, outlet: 'header' },
  { path: '', component: SidebarComponent, outlet: 'sidebar' },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'attendance', pathMatch: 'full', component: AttendanceComponent },
  { path: 'leave', pathMatch: 'full', component: LeaveComponent },
  { path: 'payslip', pathMatch: 'full', component: PayslipComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    AttendanceComponent,
    LeaveComponent,
    PayslipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    MatStepperModule,
    MatTableModule,
    MatDatepickerModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatDialogModule,
    MatTabsModule,
    ProgressbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
