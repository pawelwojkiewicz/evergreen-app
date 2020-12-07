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
  groups$: Observable<Group[]>;
  filterForm: FormGroup;

  genders = [
    { value: 'male' },
    { value: 'female' },
  ];
  ages = [
    { value: '0-18', range: [0, 17] },
    { value: '18-50', range: [18, 49] },
    { value: '50-70', range: [50, 70] }
  ];
  groupsRoute = ['/', routePath.home, routePath.groups];

  constructor(
    private groupService: GroupsService,
    private filterService: FilterService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      gender: new FormControl(null),
      age: new FormControl(null)
    });

    this.groups$ = this.groupService.getFilteredGroups();

    // this.filterService.filter$.subscribe(console.log);
    // this.filterService.filter$.pipe(map(x => {
    //   return {
    //     test: x
    //   };
    // })).subscribe(console.log);
    // this.groupService.getFilteredGroups().subscribe(value => console.log(value));

  }

  onSubmit(): void {
    this.filterService.updateFilter(this.filterForm.value);
  }

  goToGroupDetail(id: number): void {
    this.router.navigate([...this.groupsRoute, id]);
  }
}
