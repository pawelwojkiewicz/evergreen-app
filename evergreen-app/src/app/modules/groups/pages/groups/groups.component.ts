import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { routePath } from '@core/constans/route.path';
import { FilterService } from '@core/services/filter.service';
import { GroupsService } from '@core/services/groups.service';
import { Age, SelectedFilters } from '@shared/types/filter.type';
import { Group } from '@shared/types/group.type';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit, OnDestroy {
  groups$: Observable<Group[]> = this.groupService.getFilteredGroups();
  selectedFilters$: Observable<SelectedFilters[]> = this.filterService.getSelectedFilters();
  filterForm: FormGroup;

  genders = [
    { value: 'male' },
    { value: 'female' },
  ];
  ages = [
    { value: '0-18', range: [0, 18] },
    { value: '19-50', range: [19, 50] },
    { value: '51-70', range: [51, 70] }
  ];
  storagedAge: Age = [];
  groupsRoute = ['/', routePath.home, routePath.groups];

  filterServiceSubscription: Subscription;

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

    this.filterServiceSubscription = this.filterService.loadStoragedFilters()
      .subscribe(item => {
        this.storagedAge = item.age;
        this.filterForm.patchValue(item);
      });
  }

  onSubmit(): void {
    this.filterService.updateFilter(this.filterForm.value);
  }
  goToGroupDetail(id: number): void {
    this.router.navigate([...this.groupsRoute, id]);
  }

  ngOnDestroy(): void {
    this.filterServiceSubscription.unsubscribe();
  }
}
