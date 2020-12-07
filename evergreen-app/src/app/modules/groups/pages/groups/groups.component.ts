import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { Group } from 'src/app/shared/types/group.type';
import { Router } from '@angular/router';
import { routePath } from 'src/app/core/constans/route.path';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterService } from 'src/app/core/services/filter.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups$: Observable<Group[]> = this.groupService.getFilteredGroups();
  filterForm: FormGroup;
  selectedFilters: string[] = [];

  genders = [
    { value: 'male' },
    { value: 'female' },
  ];
  ages = [
    { value: '0-18', range: [0, 18] },
    { value: '19-50', range: [19, 50] },
    { value: '51-70', range: [51, 70] }
  ];
  groupsRoute = ['/', routePath.home, routePath.groups];

  constructor(
    private groupService: GroupsService,
    private filterService: FilterService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      gender: new FormControl(null),
      age: new FormControl(null)
    });
  }

  onSubmit(): void {
    this.filterService.updateFilter(this.filterForm.value);
    this.selectedFilters = this.groupService.selectedFilters;
  }

  deleteFilter(selectedFilter, index: number): void {
    console.log(selectedFilter);
    this.selectedFilters.splice(index, 1);

    console.log(this.filterForm);

    this.filterService.updateFilter(this.filterForm.value);
  }

  goToGroupDetail(id: number): void {
    this.router.navigate([...this.groupsRoute, id]);
  }
}
