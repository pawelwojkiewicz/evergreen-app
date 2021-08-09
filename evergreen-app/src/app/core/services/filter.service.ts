import { Injectable } from '@angular/core';
import { Filters, SelectedFilters } from '@shared/types/filter.type';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  // BehaviorSubject uzywamy gdy nie mamy na poczatku zadnej wartości
  // private filterSubject = new BehaviorSubject<Filters>({ gender: '', age: [] });
  // filter$ = this.filterSubject.asObservable();
  constructor(private localSt: LocalStorageService) { }

  updateFilter(filters: Partial<Filters>): void {
    const retrivedFilters = this.localSt.retrieve('filters');
    const newState = { ...retrivedFilters, ...filters };
    this.localSt.store('filters', newState);
  }

  loadStoragedFilters(): Observable<Filters> {
    let filters: Filters;
    if (this.localSt.retrieve('filters') == null) {
      filters = { gender: '', age: [] };
    } else {
      filters = this.localSt.retrieve('filters');
    }
    return this.localSt.observe('filters')
      .pipe(startWith(filters));
  }

  getSelectedFilters(): Observable<SelectedFilters[]> {
    return this.loadStoragedFilters().pipe(map(item => {
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
