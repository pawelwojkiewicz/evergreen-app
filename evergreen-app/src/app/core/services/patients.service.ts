import { Injectable } from '@angular/core';
import { Patient } from 'src/app/shared/types/patient.type';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor() { }

  private patients: Patient[] = [
    {
      name: 'WILLIAMS, Robert Monson',
      number: 'NHS 123 567 766',
      gender: 'Male',
      born: '14-Jul-1956 (39y)',
      accessLevel: 'Personal health records'
    },
    {
      name: 'WILLIAMS, Chris Contown',
      number: 'NHS 543 323 126',
      gender: 'Male',
      born: '14-Aug-1984 (40y)',
      accessLevel: 'Wellness, GP Records (NHS)'
    },
    {
      name: 'WILLIAMS, Bruce Willis',
      number: 'NHS 238 281 829',
      gender: 'Male',
      born: '11-Jun-1988 (29y)',
      accessLevel: 'Personal health records'
    },
    {
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Full access'
    },
    {
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Wellness, GP Records (NHS)'
    },
    {
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Personal health records'
    }, {
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Personal health records, GP Records'
    }, {
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Personal health records'
    }, {
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Personal health records, GP Records'
    }, {
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Full access'
    }, {
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Full access'
    }
  ];


  getPatients(): Patient[] {
    return [...this.patients];
  }

  getPatientDetail(i: number): Patient {
    return [...this.patients][i];
  }
}
