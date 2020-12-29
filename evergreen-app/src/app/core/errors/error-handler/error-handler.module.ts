import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalErrorHandler } from './global-error-handler';
import { HttpErrorInterceptor } from './http-error.interceptor';



@NgModule({
  declarations: [],
  // register the classes for the error interception here
  providers: [
    {
      // processes all errors
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      // interceptor for HTTP errors
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true // multiple interceptors are possible
    }
  ],
  imports: [
    CommonModule
  ]
})
export class ErrorHandlerModule { }
