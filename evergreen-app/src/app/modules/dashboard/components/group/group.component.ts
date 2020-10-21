import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Group } from 'src/app/shared/types/group.type';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {

  @Input() group: Group;

  @Output() detailsClick = new EventEmitter<string[]>();

  goToGroupDetail(): void {
    this.detailsClick.emit();
  }
}
