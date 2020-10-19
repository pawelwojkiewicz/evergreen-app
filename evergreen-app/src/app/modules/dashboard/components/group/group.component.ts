import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Group } from 'src/app/shared/types/group.type';
import { routePath } from 'src/app/core/core/constans/route.path';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() group: Group;

  @Output() routeEvent = new EventEmitter<string[]>();


  groupsRoute = ['/', routePath.home, routePath.groups]

  ngOnInit(): void {
  }

  goToGroupDetail() {
    this.routeEvent.emit(this.groupsRoute);
  }

}
