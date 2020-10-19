import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GroupsService } from 'src/app/core/services/groups.service';
import { Group } from 'src/app/shared/types/group.type';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss']
})
export class GroupItemComponent implements OnInit {

  group: Group;

  constructor(private groupService: GroupsService, private active: ActivatedRoute) {
    this.active.params.subscribe(
      (params: Params) => {
        const i = params.id
        this.group = this.groupService.getGroups()[i];
      }
    )

   }

  ngOnInit(): void {
  }

}
