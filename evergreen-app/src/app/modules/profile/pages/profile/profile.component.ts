import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private http: HttpClient) { }

  throwError(): void {
    throw Error('This error is in dialog window');
  }

  failingRequest(): any {
    this.http.get('https://httpstat.us/404?sleep=2000').toPromise();
  }

  successfulRequest(): any {
    this.http.get('https://httpstat.us/200?sleep=2000').toPromise();
  }
}
