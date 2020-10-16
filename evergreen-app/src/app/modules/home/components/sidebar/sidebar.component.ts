import { Component, OnInit } from '@angular/core';
import { routePath } from 'src/app/core/core/constans/route.path';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  dashboardRoute = ['/', routePath.home, routePath.dashboard];
  patientsRoute = ['/', routePath.home, routePath.patients];

  constructor() { }

  ngOnInit(): void {
  }

}
