import { Component, Input, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/core/services/groups.service';
import { Group } from 'src/app/shared/models/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() group: Group[];



  ngOnInit(): void {
  }

}
