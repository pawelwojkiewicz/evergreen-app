import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {

@Input() patient: {name: string,number: string, gender: string, born: string}
@Input() i:number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  onPatientDetail() {
    this.router.navigate([ 'patients', this.i])
  }
}
