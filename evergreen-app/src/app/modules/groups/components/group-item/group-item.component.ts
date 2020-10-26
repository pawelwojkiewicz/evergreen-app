import { Component, OnDestroy} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GroupsService } from 'src/app/core/services/groups.service';
import { Group } from 'src/app/shared/types/group.type';
import { map, subscribeOn } from 'rxjs/operators';
import { from, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss']
})
export class GroupItemComponent {
  group$: Observable<Group>;

  constructor(
    private groupService: GroupsService,
    private active: ActivatedRoute
  ) {
    this.group$ = this.active.params.pipe(map(params => this.groupService.getGroup(params.id)));
    }
 }
