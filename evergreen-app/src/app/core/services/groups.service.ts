import { Injectable } from '@angular/core';
import { Group } from 'src/app/shared/types/group.type';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor() { }

  private genderValueSubject = new Subject<string>();
  public genderValue$ = this.genderValueSubject.asObservable();

  private ageValueSubject = new Subject<string>();
  public ageValue$ = this.ageValueSubject.asObservable();

  private groups: Group[] = [
    {
      id: 1,
      name: 'Female Diabetics',
      gender: 'female',
      age: 28,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 2,
      name: 'Roberts family',
      gender: 'female',
      age: 62,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 3,
      name: 'Male Diabetics',
      gender: 'male',
      age: 12,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 4,
      name: 'Bury',
      gender: 'female',
      age: 22,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 5,
      name: 'Male Diabetics',
      gender: 'male',
      age: 58,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 6,
      name: 'Female Diabetics',
      gender: 'female',
      age: 39,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 7,
      name: 'Female Diabetics',
      gender: 'female',
      age: 17,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 8,
      name: 'Female Diabetics',
      gender: 'female',
      age: 45,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 9,
      name: 'Female Diabetics',
      gender: 'female',
      age: 51,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 10,
      name: 'Male Diabetics',
      gender: 'male',
      age: 11,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 11,
      name: 'Female Diabetics',
      gender: 'female',
      age: 36,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
  ];

  getGroups(): Group[] {
    return [...this.groups];
  }

  getGroup(id: number): Group {
    const groupElement = this.groups.find(group => group.id === +id);
    return groupElement;
  }

  filterGender(gender: string): void {
    this.genderValueSubject.next(gender);
  }

  filterAge(age: string): void {
    this.ageValueSubject.next(age);
  }
}
