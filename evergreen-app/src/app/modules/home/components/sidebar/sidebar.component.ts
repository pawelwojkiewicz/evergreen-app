import { Component } from '@angular/core';
import { routePath } from 'src/app/core/constans/route.path';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{
  dashboardRoute = ['/', routePath.home, routePath.dashboard];
  patientsRoute = ['/', routePath.home, routePath.patients];
  groupsRoute = ['/', routePath.home, routePath.groups];
}
