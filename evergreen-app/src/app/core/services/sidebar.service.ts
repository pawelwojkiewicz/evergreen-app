import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isOpen = new Subject();
  constructor() { }

  openPanel(): void {
    this.isOpen.next(true);
  }

  closePanel(): void {
    this.isOpen.next(false);
  }
}
