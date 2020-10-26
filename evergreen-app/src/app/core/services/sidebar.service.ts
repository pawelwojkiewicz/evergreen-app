import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isOpenSubject =  new Subject<boolean>();
  isCloseSubject = new Subject<boolean>();

  constructor() { }
}
