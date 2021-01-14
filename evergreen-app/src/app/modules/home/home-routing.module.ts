import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardService } from 'src/app/core/services/role-guard.service';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          )
      },
      {
        path: 'patients',
        loadChildren: () =>
          import('../patients/patients.module').then(
            (m) => m.PatientsModule
          ),
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('../groups/groups.module').then(
            (m) => m.GroupsModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then(
            (m) => m.ProfileModule
          ),
        canActivate: [RoleGuardService],
        data: {
          expectedRole: 'admin'
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
