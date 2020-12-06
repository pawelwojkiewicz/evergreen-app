import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { Group } from 'src/app/shared/types/group.type';
import { Router } from '@angular/router';
import { routePath } from 'src/app/core/constans/route.path';
import { Observable } from 'rxjs';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { FilterService } from 'src/app/core/services/filter.service';
import { Filter } from 'src/app/shared/types/filter.type';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: Group[];
  filterForm: FormGroup;
  filter: Filter;

  genders = [
    { value: 'male' },
    { value: 'female' },
  ];
  ages = [
    { value: '0-18', range: [0, 18] },
    { value: '18-50', range: [0, 18] },
    { value: '50-70', range: [0, 18] }
  ];
  groupsRoute = ['/', routePath.home, routePath.groups];

  constructor(
    private groupService: GroupsService,
    private filterService: FilterService,
    private router: Router,
  ) {
    this.groups = this.groupService.getGroups();
  }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      gender: new FormControl(null),
      age: new FormControl(null)
    });
  }

  onSubmit(): void {
    this.groupService.filterArray(this.filterForm.value);
  }

  goToGroupDetail(id: number): void {
    this.router.navigate([...this.groupsRoute, id]);
  }
}
