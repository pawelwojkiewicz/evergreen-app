import { Component } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { Group } from 'src/app/shared/types/group.type';
import { Router } from '@angular/router';
import { routePath } from 'src/app/core/constans/route.path';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  groups: Group[];
  genders = [
    { value: 'male' },
    { value: 'female' },
  ];
  ages = [
    { value: '0-18' },
    { value: '18-50' },
    { value: '50-70' }
  ];
  genderValue$: Observable<string> = this.groupService.genderValue$;
  ageValue$: Observable<string> = this.groupService.ageValue$;
  groupsRoute = ['/', routePath.home, routePath.groups];
  selectedGender: string;
  selectedAge: string;

  constructor(private groupService: GroupsService, private router: Router) {
    this.groups = groupService.getGroups();
  }

  goToGroupDetail(id: number): void {
    this.router.navigate([...this.groupsRoute, id]);
  }

  selectGender(gender: string): void {
    this.groupService.filterGender(gender);
  }

  selectAge(age: string): void {
    this.groupService.filterAge(age);
  }

  deleteGenderFilter(form: NgForm): void {
    this.groupService.filterGender('');
    this.selectedGender = '';
    form.controls.gender.reset();
  }

  deleteAgeFilter(form: NgForm): void {
    this.groupService.filterAge('');
    this.selectedAge = '';
    form.controls.age.reset();

  }
}
