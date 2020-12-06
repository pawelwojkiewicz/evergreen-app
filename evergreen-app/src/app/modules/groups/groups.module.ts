import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { GroupDetailComponent } from './pages/group-detail/group-detail.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterService } from 'src/app/core/services/filter.service';


@NgModule({
  declarations: [GroupsComponent, GroupItemComponent, GroupDetailComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    FilterService
  ],
})
export class GroupsModule { }
