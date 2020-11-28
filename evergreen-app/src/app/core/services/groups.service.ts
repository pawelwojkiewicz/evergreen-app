import { Injectable } from '@angular/core';
import { Group } from 'src/app/shared/types/group.type';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor() { }

  private groups: Group[] = [
    {
      id: 1,
      name: 'Female Diabetics',
      gender: 'female',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 2,
      name: 'Roberts family',
      gender: 'female',
      age: 26,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 3,
      name: 'Male Diabetics',
      gender: 'male',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 4,
      name: 'Bury',
      gender: 'female',
      age: 16,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 5,
      name: 'Male Diabetics',
      gender: 'male',
      age: 32,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 6,
      name: 'Female Diabetics',
      gender: 'female',
      age: 42,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 7,
      name: 'Female Diabetics',
      gender: 'female',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 8,
      name: 'Female Diabetics',
      gender: 'female',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 9,
      name: 'Female Diabetics',
      gender: 'female',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 10,
      name: 'Male Diabetics',
      gender: 'male',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 11,
      name: 'Female Diabetics',
      gender: 'female',
      age: 30,
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
}
