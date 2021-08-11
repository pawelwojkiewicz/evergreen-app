import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Fake authentication

  loggedIn = true;
  role = 'admin';

  isAuthenticated(): any {
    const promise = new Promise(
      (resolve) => {
        setTimeout(
          () => {
            resolve(this.loggedIn);
          }, 1000
        );
      }
    );
    return promise;
  }
}
