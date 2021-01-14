import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Filters, SelectedFilters } from 'src/app/shared/types/filter.type';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterSubject = new BehaviorSubject<Filters>({ gender: '', age: [] });
  filter$ = this.filterSubject.asObservable();

  updateFilter(filters: Partial<Filters>): void {
    const newState = { ...this.filterSubject.value, ...filters };
    this.filterSubject.next(newState);
  }

  getSelectedFilters(): Observable<SelectedFilters[]> {
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
