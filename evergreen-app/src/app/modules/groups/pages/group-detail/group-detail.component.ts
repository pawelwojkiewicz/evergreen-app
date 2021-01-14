import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GroupsService } from 'src/app/core/services/groups.service';
import { Group } from 'src/app/shared/types/group.type';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {
  group$: Observable<Group>;

  constructor(
    private groupService: GroupsService,
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.group$ = this.active.params.pipe(
      map(params => +params.id),
      switchMap(groupId => this.groupService.getGroup(groupId))
    );
  }
}
