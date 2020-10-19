import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupItemComponent } from './components/group-item/group-item.component';


@NgModule({
  declarations: [GroupsComponent, GroupItemComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
