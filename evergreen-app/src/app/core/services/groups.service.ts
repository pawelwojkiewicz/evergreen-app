import { Injectable } from '@angular/core';
import { Group } from 'src/app/shared/types/group.type';
import { FilterService } from './filter.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Filters } from 'src/app/shared/types/filter.type';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GroupsService {

  filter$: Observable<Filters> = this.filterService.filter$;

  constructor(private filterService: FilterService) { }

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

  private groups$ = new BehaviorSubject(this.groups);

  getGroups(): Group[] {
    return [...this.groups];
  }

  getGroup(id: number): Group {
    const groupElement = this.groups.find(group => group.id === +id);
    return groupElement;
  }

  getFilteredGroups(): Observable<Group[]> {
    return this.filterService.filter$.pipe(
    switchMap(currentState => {
       return this.groups$.pipe(
         map(groups => {
          let filteredArray =  groups;

          if (currentState.age && currentState.age.length) {
            filteredArray = filteredArray.filter(item => item.age >= currentState.age[0] && item.age <= currentState.age[1]);
          }

          return filteredArray;
         })
       )
      })
    );
  }
}
