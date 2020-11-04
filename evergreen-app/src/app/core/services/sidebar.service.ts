import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  notificationOpen = new Subject<boolean>();
  constructor() { }

  onNotificationOpen(): void {
    this.notificationOpen.next(true);
  }
  onNotificationClose(): void {
    this.notificationOpen.next(false);
  }
}
