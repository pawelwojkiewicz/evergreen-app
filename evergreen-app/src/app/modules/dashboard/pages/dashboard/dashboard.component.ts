import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  patients = [
  {
    name: 'WILLIAMS, Jonatan Simson',
    number: 'NHS 123 567 766',
    gender: 'Male',
    born: '14-Jul-1956 (39y)'
  },
  {
    name: 'WILLIAMS, Jonatan Simson',
    number: 'NHS 123 567 766',
    gender: 'Male',
    born: '14-Jul-1956 (39y)'
  },
  {
    name: 'WILLIAMS, Jonatan Simson',
    number: 'NHS 123 567 766',
    gender: 'Male',
    born: '14-Jul-1956 (39y)'
  },
  {
    name: 'WILLIAMS, Jonatan Simson',
    number: 'NHS 123 567 766',
    gender: 'Male',
    born: '14-Jul-1956 (39y)'
  }
]


  groups = [
    {
      name: 'Female Diabetics',
      gender: 'Female',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      name: 'Female Diabetics',
      gender: 'Female',
      age: 26,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      name: 'Female Diabetics',
      gender: 'Female',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
