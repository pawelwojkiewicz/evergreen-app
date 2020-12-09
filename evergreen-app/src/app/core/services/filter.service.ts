import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { Filters } from 'src/app/shared/types/filter.type';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterSubject = new BehaviorSubject<Filters>({ gender: '', age: [] });
  filter$ = this.filterSubject.asObservable();

  updateFilter(filters: Filters): void {
    this.filterSubject.next(filters);
  }

  removeAgeFilter(): void {
    this.filterSubject.value.age = [];
    this.updateFilter(this.filterSubject.value);
  }

  removeGenderFilter(): void {
    this.filterSubject.value.gender = '';
    this.updateFilter(this.filterSubject.value);
  }
}
