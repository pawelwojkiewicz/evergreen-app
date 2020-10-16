import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/types/patient.type';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {

  @Input() patient: Patient;
  @Input() i: number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  onPatientDetail(): void {
    this.router.navigate(['home/patients', this.i]);
  }
}
