import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  isOpen: boolean;
  openSubscribe: Subscription;
  routeSubscribe: Subscription;


  constructor(
    private sidebarService: SidebarService,
    private router: Router
  ){
    this.openSubscribe = this.sidebarService.isOpenSubject.subscribe(
      () => {
        this.isOpen = true;
      }
    );
    this.routeSubscribe = this.router.events.subscribe(
      () => {
        this.isOpen = false;
        this.sidebarService.isCloseSubject.next();
      }
    );
  }

  onCloseOverlay(): void {
    this.isOpen = false;
    this.sidebarService.isCloseSubject.next();
  }

  ngOnDestroy(): void {
    this.openSubscribe.unsubscribe();
    this.routeSubscribe.unsubscribe();
  }
}
