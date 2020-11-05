import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private notifivationOpenSubject =  new Subject<boolean>();
  public notificationOpen$ = this.notifivationOpenSubject.asObservable();

  constructor() { }

  onNotificationOpen(): void {
    this.notifivationOpenSubject.next(true);
  }
  onNotificationClose(): void {
    this.notifivationOpenSubject.next(false);
  }
}
