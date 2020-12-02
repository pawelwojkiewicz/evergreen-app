import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gender } from 'src/app/shared/types/filter.type';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterGenderSubject = new BehaviorSubject<Gender>('');
  public filterGenderSubject$ = this.filterGenderSubject.asObservable();

  updateGender(gender: string): void {
    this.filterGenderSubject.next(gender);
  }
}
