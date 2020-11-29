import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { GroupDetailComponent } from './pages/group-detail/group-detail.component';
import { MaterialModule } from '../material/material.module';
import { FilterGenderPipe } from '../../shared/pipes/filter-gender.pipe';
import { FormsModule } from '@angular/forms';
import { FilterAgePipe } from 'src/app/shared/pipes/filter-age.pipe';


@NgModule({
  declarations: [GroupsComponent, GroupItemComponent, GroupDetailComponent, FilterGenderPipe, FilterAgePipe],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class GroupsModule { }
