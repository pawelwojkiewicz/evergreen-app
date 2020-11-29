import { Component } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { Group } from 'src/app/shared/types/group.type';
import { Router } from '@angular/router';
import { routePath } from 'src/app/core/constans/route.path';
import { Observable } from 'rxjs';

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
  groupsRoute = ['/', routePath.home, routePath.groups];
  selectedGender: string;
  selectedAge: string;

  constructor(private groupService: GroupsService, private router: Router) {
    this.groups = groupService.getGroups();
  }

  goToGroupDetail(id: number): void {
    this.router.navigate([...this.groupsRoute, id]);
  }

  deleteGenderFilter(): void {
    this.selectedGender = '';
  }

  deleteAgeFilter(): void {
    this.selectedAge = '';
  }
}
