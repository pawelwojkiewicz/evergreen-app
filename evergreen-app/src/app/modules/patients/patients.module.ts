import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './pages/patients/patients.component';
import { PatientDetailComponent } from './pages/patient-detail/patient-detail.component';

@NgModule({
  declarations: [PatientsComponent, PatientDetailComponent],
  imports: [CommonModule, PatientsRoutingModule],
})
export class PatientsModule {}
