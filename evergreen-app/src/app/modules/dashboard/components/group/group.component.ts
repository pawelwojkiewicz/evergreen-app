import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Group } from 'src/app/shared/types/group.type';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupComponent implements OnChanges {

  @Input() group: Group;

  @Output() detailsClick = new EventEmitter<string[]>();

  constructor(private changeDetector: ChangeDetectorRef) {
    setInterval(() => { this.changeDetector.markForCheck() }, 1500);
  }

  goToGroupDetail(): void {
    this.detailsClick.emit();
  }

  get runChangeDetection(): boolean {
    console.log('Checking the view');
    return true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const prop of Object.keys(changes)) {
      console.log(changes[prop]);
    }
  }


}
