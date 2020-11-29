import { Pipe, PipeTransform } from '@angular/core';
import { Group } from '../types/group.type';

@Pipe({
  name: 'filterGender',
  pure: false
})
export class FilterGenderPipe implements PipeTransform {

  transform(values: Group[], gender: string): Group[] {
    if (gender) {
      return values.filter((item) => item.gender === gender);
    }
    return values;
  }

}
