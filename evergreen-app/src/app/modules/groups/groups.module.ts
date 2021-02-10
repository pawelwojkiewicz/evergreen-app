import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupDetailComponent } from './pages/group-detail/group-detail.component';
import { GroupsComponent } from './pages/groups/groups.component';




@NgModule({
  declarations: [GroupsComponent, GroupItemComponent, GroupDetailComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class GroupsModule { }
