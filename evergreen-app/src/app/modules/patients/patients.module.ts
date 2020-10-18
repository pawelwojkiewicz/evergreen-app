import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './pages/patients/patients.component';
import { PatientDetailComponent } from './pages/patient-detail/patient-detail.component';
import { PatientItemComponent } from './components/patient-item/patient-item.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PatientsComponent, PatientDetailComponent, PatientItemComponent],
  imports: [CommonModule, PatientsRoutingModule, MaterialModule],
})
export class PatientsModule { }
