import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { Filters } from 'src/app/shared/types/filter.type';

@Injectable({
  providedIn: 'root',
})
export class FilterService {

  // prywatny strumień o typie string
  private filterSubject = new BehaviorSubject<Filters>({gender: '', age: []});

  // publiczny strumien - Obervable,  do którego mozemy sie podpiac poprzez Subscribe
  filter$ = this.filterSubject.asObservable();

  // Funkcja która aktualizuje nasz Observable o properte filters
  updateFilter(filters: Filters): void {
    this.filterSubject.next(filters);
  }
}
