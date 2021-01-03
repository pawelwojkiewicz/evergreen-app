import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { routePath } from '../constans/route.path';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  dashboardRote = ['/', routePath.home, routePath.dashboard];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRole = route.data.expectedRole;
    if (this.authService.role !== expectedRole) {
      this.router.navigate(this.dashboardRote);
      alert('You dont have permission to enter here');
      return false;
    }
    console.log(this.authService.role, expectedRole);
    return true;
  }
}
