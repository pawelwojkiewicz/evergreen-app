import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from 'src/app/core/services/groups.service';
import { Group } from 'src/app/shared/types/group.type';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent {
  group$: Observable<Group>;

  constructor(
    private groupService: GroupsService,
    private active: ActivatedRoute
  ) {
    this.group$ = this.active.params.pipe(map(params => this.groupService.getGroup(params.id)));
  }
}
