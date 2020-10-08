import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard-routing.module').then(
            (m) => m.DashboardRoutingModule
          ),
      },
      {
        path: 'patients',
        loadChildren: () =>
          import('../patients/patients-routing.module').then(
            (m) => m.PatientsRoutingModule
          ),
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('../groups/groups-routing.module').then(
            (m) => m.GroupsRoutingModule
          ),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('../messages/messages-routing.module').then(
            (m) => m.MessagesRoutingModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile-routing.module').then(
            (m) => m.ProfileRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
