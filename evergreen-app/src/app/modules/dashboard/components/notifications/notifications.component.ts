import { Subscription } from 'rxjs';
import { NotificationsService } from './../../../../core/services/notifications.service';
import { Notification } from './../../../../shared/types/notification.type';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit,OnDestroy {
  isOpen = false;
  notifications: Notification[];
  openSupscription: Subscription;

  constructor(
    private sidebarService: SidebarService,
    private notificationService: NotificationsService
  ) {
      this.openSupscription = this.sidebarService.isOpen.subscribe(
        (isOpen: boolean) => {
          this.isOpen = isOpen;
        }
      );
  }

  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications();
  }

  onCloseNotifications(): void {
    this.isOpen = false;
    this.sidebarService.closePanel();
  }

  ngOnDestroy(): void {
    this.openSupscription.unsubscribe();
  }
}
