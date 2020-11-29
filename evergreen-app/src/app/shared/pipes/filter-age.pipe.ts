import { Pipe, PipeTransform } from '@angular/core';
import { Group } from '../types/group.type';

@Pipe({
  name: 'filterAge'
})
export class FilterAgePipe implements PipeTransform {

  transform(values: Group[], age: string): Group[] {
    if (age === '0-18') {
      return values.filter(value => value.age < 18);
    } else if (age === '18-50') {
      return values.filter(value => value.age > 18 && value.age < 50);
    } else if (age === '50-70') {
      return values.filter(value => value.age > 49 && value.age < 70);
    }
    return values;
  }

}
