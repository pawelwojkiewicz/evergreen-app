import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  confirmMessage = 'Are you really want to confirm ?';
  condition = true;
  text = '';
  trucnatedText = 'This text is truncated and should be cut after 20 characters';
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

  makeSomeLogic(): void {
    console.log('you made some logic!');
  }
}
