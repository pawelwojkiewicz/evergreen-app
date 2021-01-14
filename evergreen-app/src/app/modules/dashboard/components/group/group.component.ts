import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Group } from '@shared/types/group.type';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupComponent {

  @Input() group: Group;

  // ----Przejscie do routingu poprzez parent element----

  // @Output() detailsClick = new EventEmitter<string[]>();

  // goToGroupDetail(): void {
  //   this.detailsClick.emit();
  // }
}
