import {
  HttpErrorResponse, HttpEvent, HttpHandler,

  HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { ErrorDialogService } from 'src/app/shared/services/error-dialog.service';
import { LoadingDialogService } from 'src/app/shared/services/loading-dialog.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private loadingDialogService: LoadingDialogService,
    private errorDialogService: ErrorDialogService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // show loading spinner
    this.loadingDialogService.openDialog();

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error from error interceptor', error);
        // show dialog for error message
        this.errorDialogService.openDialog(error.message ?? JSON.stringify(error), error.status);
        return throwError(error);
      }),
      finalize(() => {
        // hide loading spinner
        this.loadingDialogService.hideDialog();
      })
    );


  }
}
