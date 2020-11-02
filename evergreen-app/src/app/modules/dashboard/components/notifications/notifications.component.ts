import { NotificationsService } from './../../../../core/services/notifications.service';
import { Notification } from './../../../../shared/types/notification.type';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  isOpen = false;
  notifications: Notification[];

  constructor(
    private sidebarService: SidebarService,
    private notificationService: NotificationsService
  ) {
    this.sidebarService.openNotifications.subscribe(
      (isOpen: boolean) => {
        this.isOpen = isOpen;
      }
    );
  }

  onCloseNotifications(): void {
    this.isOpen = false;
    this.sidebarService.closeNotifications.next(false);
  }

  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications();
  }
}
