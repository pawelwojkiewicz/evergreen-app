import { Subscription } from 'rxjs';
import { Component, EventEmitter, OnDestroy } from '@angular/core';
import { routePath } from 'src/app/core/constans/route.path';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy{

  isOpen = false;
  closeSubscribe: Subscription;
  dashboardRoute = ['/', routePath.home, routePath.dashboard];
  patientsRoute = ['/', routePath.home, routePath.patients];
  groupsRoute = ['/', routePath.home, routePath.groups];

  constructor(
    private sidebarService: SidebarService,
  ){
    this.closeSubscribe = this.sidebarService.isCloseSubject.subscribe(
      () => {
        this.isOpen = false;
      }
    );
  }

  onSidebarTrigger(): void {
    this.isOpen = true;
    this.sidebarService.isOpenSubject.next();
  }

  ngOnDestroy(): void {
    this.closeSubscribe.unsubscribe();
  }
}
