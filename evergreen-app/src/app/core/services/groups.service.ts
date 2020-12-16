import { Injectable } from '@angular/core';
import { Group } from 'src/app/shared/types/group.type';
import { FilterService } from './filter.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GroupsService {

  constructor(
    private filterService: FilterService,
    private http: HttpClient,
  ) { }

  fetchGroups(): Observable<Group[]> {
    return this.http.get<Group[]>('assets/groups.json');
  }

  getGroup(id: number): Observable<Group> {
    return this.fetchGroups().pipe(map(groups => groups.find(group => group.id === +id)));
  }

  getFilteredGroups(): Observable<Group[]> {
    return this.filterService.filter$.pipe(
      switchMap(currentFilters => {
        return this.fetchGroups().pipe(
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
}



  // w komponencie group zrob nasluchiwanie na zmiane filtrow, po inicjalizacji formularza

