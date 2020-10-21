import { Component, Input } from '@angular/core';
import { Patient } from 'src/app/shared/types/patient.type';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent {
  @Input() patient: Patient;
}
