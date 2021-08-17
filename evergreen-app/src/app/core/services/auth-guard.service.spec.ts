// import { Router } from '@angular/router';
// import { createServiceFactory, mockProvider, SpectatorService } from '@ngneat/spectator';

// import { AuthGuardService } from './auth-guard.service';
// import { AuthService } from './auth.service';

// describe('AuthService', () => {
//   let spectator: SpectatorService<AuthGuardService>;
//   const routerSpy = {navigate: jasmine.createSpy('navigate')};
//   const createService = createServiceFactory({
//     service: AuthGuardService,
//     providers: [
//       AuthService,
//       mockProvider(Router, routerSpy)
//     ]
//   });

//   beforeEach(() => {
//     spectator = createService();
//   } );

//   it('should not be logged in', () => {
//     console.log(spectator.service.canActivate());
//     // spyOn(AuthService, 'isAuthenticated').and.returnValue(true);
//     // expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
//     // expect(spectator.service.canActivate()).toEqual(false);
//   });
// });
