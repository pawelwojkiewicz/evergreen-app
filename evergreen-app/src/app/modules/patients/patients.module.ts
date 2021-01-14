import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { PatientItemComponent } from './components/patient-item/patient-item.component';
import { PatientDetailComponent } from './pages/patient-detail/patient-detail.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { PatientsRoutingModule } from './patients-routing.module';


@NgModule({
  declarations: [PatientsComponent, PatientDetailComponent, PatientItemComponent],
  imports: [CommonModule, PatientsRoutingModule, MaterialModule],
})
export class PatientsModule { }
