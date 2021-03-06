import { Injectable } from '@angular/core';
import { Patient } from '@shared/types/patient.type';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private patients: Patient[] = [
    {
      id: 1,
      name: 'WILLIAMS, Robert Monson',
      number: 'NHS 123 567 766',
      gender: 'Male',
      born: '14-Jul-1956 (39y)',
      accessLevel: 'Personal health records'
    },
    {
      id: 2,
      name: 'WILLIAMS, Chris Contown',
      number: 'NHS 543 323 126',
      gender: 'Male',
      born: '14-Aug-1984 (40y)',
      accessLevel: 'Wellness, GP Records (NHS)'
    },
    {
      id: 3,
      name: 'WILLIAMS, Bruce Willis',
      number: 'NHS 238 281 829',
      gender: 'Male',
      born: '11-Jun-1988 (29y)',
      accessLevel: 'Personal health records'
    },
    {
      id: 4,
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Full access'
    },
    {
      id: 5,
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Wellness, GP Records (NHS)'
    },
    {
      id: 6,
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Personal health records'
    }, {
      id: 7,
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Personal health records, GP Records'
    }, {
      id: 8,
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Personal health records'
    }, {
      id: 9,
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Personal health records, GP Records'
    }, {
      id: 10,
      name: 'WILLIAMS, Jonatan Simson',
      number: 'NHS 283 932 029 832',
      gender: 'Female',
      born: '14-Mar-1966 (49y)',
      accessLevel: 'Full access'
    }, {
      id: 11,
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

  getPatientDetail(id: number): Patient {
    const patientElement = this.patients.find(patient => patient.id === +id);
    return patientElement;
  }
}
