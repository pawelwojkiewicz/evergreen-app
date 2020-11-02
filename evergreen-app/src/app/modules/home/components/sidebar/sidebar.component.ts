import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { routePath } from 'src/app/core/constans/route.path';
import { NavigationStart, Router } from '@angular/router';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy {

  isOpen = false;
  isOverlay = false;
  closeSubscribe: Subscription;
  dashboardRoute = ['/', routePath.home, routePath.dashboard];
  patientsRoute = ['/', routePath.home, routePath.patients];
  groupsRoute = ['/', routePath.home, routePath.groups];
  routerSubscribtion: Subscription;

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
  ) {
    this.routerSubscribtion = this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isOpen = false;
        }
      }
    );
    this.sidebarService.closeNotifications.subscribe(
      (isClose: boolean) => {
        this.isOverlay = isClose;
      }
    )
  }

  onOpenSidebar(): void {
    this.isOverlay = true;
    this.isOpen = true;
  }

  onOpenNotifications(): void {
    this.isOverlay = true;
    this.sidebarService.openNotifications.next(true);
  }

  onOverlay(): void {
    this.isOpen = false;
    this.isOverlay = false;
    this.sidebarService.openNotifications.next(false);
  }

  ngOnDestroy(): void {
    this.routerSubscribtion.unsubscribe();
  }
}
