import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { routePath } from '@core/constans/route.path';
import { NotificationsService } from '@core/services/notifications.service';
import { SidebarService } from '@core/services/sidebar.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy {

  isOpen = false;

  isOpen$: Observable<boolean> = this.sidebarService.isOpen$;

  dashboardRoute = ['/', routePath.home, routePath.dashboard];
  patientsRoute = ['/', routePath.home, routePath.patients];
  groupsRoute = ['/', routePath.home, routePath.groups];

  routerSubscribtion: Subscription;

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private notificationService: NotificationsService,
  ) {
    this.routerSubscribtion = this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isOpen = false;
          this.sidebarService.sidebarState(false);
        }
      }
    );
  }

  onOpenSidebar(): void {
    this.sidebarService.sidebarState(true);
  }

  onCloseSidebar(): void {
    this.sidebarService.sidebarState(false);
  }

  onOpenNotifications(): void {
    this.notificationService.notificationState(true);
  }

  ngOnDestroy(): void {
    this.routerSubscribtion.unsubscribe();
  }
}
