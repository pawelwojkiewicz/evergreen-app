import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PatientsService } from 'src/app/core/services/patients.service';
import { Patient } from 'src/app/shared/types/patient.type';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  constructor (
    private active: ActivatedRoute,
    private patientsService: PatientsService
  ) { }

  patient: Patient;

  ngOnInit(): void {
    this.active.params.subscribe(
      (params: Params) => {
        const i = params.id;
        this.patient = this.patientsService.getPatientDetail(i);
      }
    );
  }
}
