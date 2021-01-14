import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailComponent } from './pages/patient-detail/patient-detail.component';
import { PatientsComponent } from './pages/patients/patients.component';

const routes: Routes = [
  { path: '', component: PatientsComponent },
  { path: ':id', component: PatientDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule { }
