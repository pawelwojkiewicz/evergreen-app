import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './pages/patients/patients.component';

@NgModule({
  declarations: [PatientsComponent],
  imports: [CommonModule, PatientsRoutingModule],
})
export class PatientsModule {}
