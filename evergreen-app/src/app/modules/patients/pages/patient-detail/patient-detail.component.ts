import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PatientsService } from 'src/app/core/services/patients.service';
import { Patient } from 'src/app/shared/types/patient.type';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent {
  patient$: Observable<Patient>;

  constructor(
    private active: ActivatedRoute,
    private patientsService: PatientsService
  ) {
    this.patient$ = this.active.params.pipe(map(params => this.patientsService.getPatientDetail(params.id)));
  }
}
