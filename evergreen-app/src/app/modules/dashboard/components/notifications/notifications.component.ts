import { Subscription, Observable } from 'rxjs';
import { NotificationsService } from './../../../../core/services/notifications.service';
import { Notification } from './../../../../shared/types/notification.type';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  isOpen$: Observable<boolean> = this.sidebarService.notificationOpen;
  notifications: Notification[];

  constructor(
    private notificationService: NotificationsService,
    private sidebarService: SidebarService,
  ) { }

  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications();
  }

  onOverlay(): void {
    this.sidebarService.onNotificationClose();
  }

  onCloseNotifications(): void {
    this.sidebarService.onNotificationClose();
  }
}
