import { Subscription, Observable } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { routePath } from 'src/app/core/constans/route.path';
import { NavigationStart, Router } from '@angular/router';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';

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
