import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { routePath } from '../constans/route.path';
import { AuthService } from './auth.service';

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
