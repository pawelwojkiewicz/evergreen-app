import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GroupComponent } from './components/group/group.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PatientCardComponent } from './components/patient-card/patient-card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';




@NgModule({
  declarations: [DashboardComponent, PatientCardComponent, GroupComponent, NotificationsComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule { }
