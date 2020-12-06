import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter } from 'src/app/shared/types/filter.type';

@Injectable({
  providedIn: 'root',

})
export class FilterService {

  // prywatny strumień o typie string
  private filterSubject = new BehaviorSubject<Filter>(null);

  // publiczny strumien - Obervable,  do którego mozemy sie podpiac poprzez Subscribe
  public filter$ = this.filterSubject.asObservable();

  // Funkcja która aktualizuje nasz Observable o properte filter
  updateFilter(filter: Filter): void {
    this.filterSubject.next(filter);
  }
}
