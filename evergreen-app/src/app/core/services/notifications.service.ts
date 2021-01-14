import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from './../../shared/types/notification.type';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private isOpenSubject = new Subject<boolean>();
  public isOpen$ = this.isOpenSubject.asObservable();

  private notifications: Notification[] = [
    {
      id: 1,
      user: 'SMITH, Adam',
      date: '21-Jul-1956',
      hour: '10:53',
      message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa'
    },
    {
      id: 2,
      user: 'TAYLOR, Elizabeth Ann',
      date: '21-Jul-1956',
      hour: '10:53',
      message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa'
    },
    {
      id: 3,
      user: 'WILLIAMS, Jonatan Simson',
      date: '21-Jul-1956',
      hour: '10:53',
      message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa'
    },
    {
      id: 4,
      user: 'TAYLOR, Elizabeth Ann',
      date: '21-Jul-1956',
      hour: '10:53',
      message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa'
    },
    {
      id: 5,
      user: 'SMITH, Adam',
      date: '21-Jul-1956',
      hour: '10:53',
      message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa'
    },
  ];

  getNotifications(): Notification[] {
    return [...this.notifications];
  }

  notificationState(state: boolean): void {
    this.isOpenSubject.next(state);
  }
}
