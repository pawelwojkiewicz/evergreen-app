import { Injectable } from '@angular/core';
import { Group } from 'src/app/shared/types/group.type';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor() { }
  private groups: Group[] = [
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
  ];


  getGroups(): Group[] {
    return [...this.groups];
  }
}
