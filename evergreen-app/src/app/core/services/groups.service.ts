import { Injectable } from '@angular/core';
import { Group } from 'src/app/shared/types/group.type';
import { FilterService } from './filter.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Filters, SelectedFilters } from 'src/app/shared/types/filter.type';
import { switchMap, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class GroupsService {

  filter$: Observable<Filters> = this.filterService.filter$;
  filterForm: FormGroup;

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


  getFilteredGroups(): Observable<Group[]> {
    return this.filter$.pipe(
      switchMap(currentFilters => {
        return this.groups$.pipe(
          map(groups => {
            let filteredArray = groups;
            if (
              currentFilters.age &&
              currentFilters.age.length
            ) {
              filteredArray = filteredArray.filter(
                group =>
                  group.age >= currentFilters.age[0] &&
                  group.age <= currentFilters.age[1]
              );
            }
            if (currentFilters.gender) {
              filteredArray = filteredArray.filter(
                group =>
                  group.gender === currentFilters.gender
              );
            }
            return filteredArray;
          })
        );
      })
    );
  }

  getSelectedFilters(): Observable<SelectedFilters[]> {
    return this.filter$.pipe(map(item => {
      const selectedFilters: SelectedFilters[] = [];
      if (item.age && item.age.length) {
        const age = `${item.age[0]}-${item.age[1]} years old`;
        selectedFilters.push({
          label: age,
          onDelete: () => {
            this.filterService.removeAgeFilter();
          }
        });
      }
      if (item.gender) {
        selectedFilters.push({
          label: item.gender,
          onDelete: () => {
            this.filterService.removeGenderFilter();
          }
        });
      }
      return selectedFilters;
    })
    );
  }
}
