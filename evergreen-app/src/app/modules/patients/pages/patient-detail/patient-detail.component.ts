import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '@core/services/patients.service';
import { Patient } from '@shared/types/patient.type';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
