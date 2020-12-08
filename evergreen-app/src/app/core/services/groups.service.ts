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
  selectedFilters: string[] = [];

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
      age: 50,
      medication: 'Metmorfin',
      hapiness: '8-10'
    },
    {
      id: 8,
      name: 'Female Diabetics',
      gender: 'female',
      age: 51,
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


  getFilteredGroups(): any {
    return this.filter$.pipe(
      switchMap(currentFilters => {
        // mapujemy arrayke groups w zaleznosci od filtra
        return this.groups$.pipe(
          map(groups => {
            // Przypisujemy do nowej zmiennej nasza arrayke z groups
            let filteredArray = groups;
            this.selectedFilters = [];
            // Tworzymy if statements dla kazdego filtra
            if (
              currentFilters.age &&
              currentFilters.age.length
            ) {
              // przypisujemy do naszej stworzonej arrayki z danymi zfiltrowana arrayke
              filteredArray = filteredArray.filter(
                group =>
                  group.age >= currentFilters.age[0] &&
                  group.age <= currentFilters.age[1]
              );
              const ageFilterText = `${currentFilters.age[0]}-${currentFilters.age[1]} years old`;
              this.selectedFilters.push(ageFilterText);
            }
            if (currentFilters.gender) {
              filteredArray = filteredArray.filter(
                group =>
                  group.gender === currentFilters.gender
              );
              this.selectedFilters.push(currentFilters.gender);
            }
            return filteredArray;
          })
        );
      })
    );
  }
}
