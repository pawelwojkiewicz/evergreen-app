import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { Group } from 'src/app/shared/types/group.type';
import { Router } from '@angular/router';
import { routePath } from 'src/app/core/constans/route.path';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterService } from 'src/app/core/services/filter.service';
import { SelectedFilters } from 'src/app/shared/types/filter.type';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
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


    this.filterService.filter$.subscribe(item => {

      //  this.filterForm.patchValue - wprowadzam item - obiekt filtrow.
      //  ma sie wywolywac tylko kiedy zmieni sie stan formularza.
      // pipe(filter)

      // if (item.gender === '') {
      //   this.filterForm.controls.gender.reset();
      // }
      // if (item.age != null && item.age.length < 1) {
      //   this.filterForm.controls.age.reset();
      // }
    });
  }
  onSubmit(): void {
    this.filterService.updateFilter(this.filterForm.value);
  }
  goToGroupDetail(id: number): void {
    this.router.navigate([...this.groupsRoute, id]);
  }
}
