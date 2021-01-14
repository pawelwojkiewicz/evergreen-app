import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService } from './../../../../core/services/notifications.service';
import { Notification } from './../../../../shared/types/notification.type';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  isOpen$: Observable<boolean> = this.notificationService.isOpen$;
  notifications: Notification[];

  constructor(
    private notificationService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications();
  }

  onCloseNotification(): void {
    this.notificationService.notificationState(false);
  }
}
