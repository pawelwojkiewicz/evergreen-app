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
  showNotificationsButton = true;

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
          this.showNotificationsButton = !this.showNotificationsButton;
        }
      }
    );
  }

  onOpenSidebar(): void {
    this.isOpen = true;
  }

  onOpenNotifications(): void {
    this.sidebarService.onNotificationOpen();
  }

  onOverlay(): void {
    this.isOpen = false;
  }

  ngOnDestroy(): void {
    this.routerSubscribtion.unsubscribe();
  }
}
