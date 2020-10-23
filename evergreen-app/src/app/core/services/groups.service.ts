import { Injectable } from '@angular/core';
import { Group } from 'src/app/shared/types/group.type';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor() { }
  private groups: Group[] = [
    {
      id: 1,
      name: 'Female Diabetics',
      gender: 'Female',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 2,
      name: 'Roberts family',
      gender: 'Female',
      age: 26,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 3,
      name: 'Female Diabetics',
      gender: 'Female',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 4,
      name: 'Bury',
      gender: 'Female',
      age: 16,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 5,
      name: 'Male Diabetics',
      gender: 'Male',
      age: 32,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 6,
      name: 'Female Diabetics',
      gender: 'Female',
      age: 42,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 7,
      name: 'Female Diabetics',
      gender: 'Female',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 8,
      name: 'Female Diabetics',
      gender: 'Female',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 9,
      name: 'Female Diabetics',
      gender: 'Female',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 10,
      name: 'Female Diabetics',
      gender: 'Female',
      age: 30,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 11,
      name: 'Female Diabetics',
      gender: 'Female',
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
