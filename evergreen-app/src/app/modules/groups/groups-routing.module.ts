import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from '../dashboard/components/group/group.component';
import { GroupItemComponent } from './components/group-item/group-item.component';

import { GroupsComponent } from './pages/groups/groups.component';

const routes: Routes = [
  { path: '', component: GroupsComponent },
  { path: ':id', component: GroupItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
