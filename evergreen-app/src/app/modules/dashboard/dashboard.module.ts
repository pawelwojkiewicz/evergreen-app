import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PatientCardComponent } from './components/patient-card/patient-card.component';
import { GroupComponent } from './components/group/group.component';

@NgModule({
  declarations: [DashboardComponent, PatientCardComponent, GroupComponent],
  imports: [CommonModule, DashboardRoutingModule, ],
})
export class DashboardModule {}
