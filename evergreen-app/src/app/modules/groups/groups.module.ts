import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { GroupDetailComponent } from './pages/group-detail/group-detail.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [GroupsComponent, GroupItemComponent, GroupDetailComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MaterialModule,
  ]
})
export class GroupsModule { }
