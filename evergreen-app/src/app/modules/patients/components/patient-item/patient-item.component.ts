import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/shared/types/patient.type';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.scss']
})
export class PatientItemComponent implements OnInit {

  @Input() patient: Patient;

  constructor() { }

  ngOnInit(): void {
  }

}
