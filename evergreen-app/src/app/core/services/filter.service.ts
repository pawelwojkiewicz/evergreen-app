import { Injectable } from '@angular/core';
import { Filters, SelectedFilters } from '@shared/types/filter.type';
import { LocalStorageService } from 'ngx-webstorage';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterSubject = new BehaviorSubject<Filters>({ gender: '', age: [] });
  filter$ = this.filterSubject.asObservable();

  constructor(private localSt: LocalStorageService) { }


  updateFilter(filters: Partial<Filters>): void {
    const newState = { ...this.filterSubject.value, ...filters };
    this.filterSubject.next(newState);
    this.localSt.store('filter', newState);
  }

  getSelectedFilters(): Observable<SelectedFilters[]> {
    const storageFilters = this.localSt.retrieve('filter');
    this.filterSubject.next(storageFilters);
    return this.filterSubject.pipe(map(item => {
      const selectedFilters: SelectedFilters[] = [];
      if (item.age && item.age.length) {
        const age = `${item.age[0]}-${item.age[1]} years old`;
        selectedFilters.push({
          label: age,
          onDelete: () => {
            this.updateFilter({ age: [] });
          }
        });
      }
      if (item.gender) {
        selectedFilters.push({
          label: item.gender,
          onDelete: () => {
            this.updateFilter({ gender: '' });
          }
        });
      }
      return selectedFilters;

    })
    );
  }
}
