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
  showNotificationsButton = true;

  dashboardRoute = ['/', routePath.home, routePath.dashboard];
  patientsRoute = ['/', routePath.home, routePath.patients];
  groupsRoute = ['/', routePath.home, routePath.groups];

  routerSubscribtion: Subscription;
  closeSubscribtion: Subscription;


  constructor(
    private router: Router,
    private sidebarService: SidebarService,
  ) {
    this.routerSubscribtion = this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isOpen = false;
          this.isOverlay = false;
          this.showNotificationsButton = !this.showNotificationsButton;
        }
      }
    );
    this.closeSubscribtion = this.sidebarService.isOpen.subscribe(
      (isOpen: boolean) => {
        this.isOverlay = isOpen;
      }
    );
  }

  onOpenSidebar(): void {
    this.isOpen = true;
    this.isOverlay = true;
  }

  onOpenNotifications(): void {
    this.sidebarService.openPanel();
  }

  onOverlay(): void {
    this.isOpen = false;
    this.isOverlay = false;
    this.sidebarService.closePanel();
  }

  ngOnDestroy(): void {
    this.routerSubscribtion.unsubscribe();
    this.closeSubscribtion.unsubscribe();
  }
}
