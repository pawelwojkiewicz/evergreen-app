import { Component, Input, OnInit } from '@angular/core';
import { routePath } from 'src/app/core/constans/route.path';
import { Patient } from 'src/app/shared/types/patient.type';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent {
  @Input() patient: Patient;

  patientDetailRoute = ['/', routePath.home, routePath.patients];

  getDetailsRoute(): any[] {
    return [...this.patientDetailRoute, this.patient.id];
  }
}


