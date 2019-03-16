import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CalenderComponent } from './calender/calender.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [DashboardComponent, CalenderComponent, SummaryComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
