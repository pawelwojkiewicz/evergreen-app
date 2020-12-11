import { Component, Input } from '@angular/core';
import { Group } from 'src/app/shared/types/group.type';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss']
})
export class GroupItemComponent {
  @Input() group: Group;
}
