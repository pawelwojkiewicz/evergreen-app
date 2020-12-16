import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private isOpenSubject = new Subject<boolean>();
  public isOpen$ = this.isOpenSubject.asObservable();

  sidebarState(state: boolean): void {
    this.isOpenSubject.next(state);
  }
}
