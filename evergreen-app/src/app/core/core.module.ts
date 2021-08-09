import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ErrorHandlerModule } from './errors/error-handler/error-handler.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ErrorHandlerModule,
    NgxWebstorageModule.forRoot(),
  ]
})
export class CoreModule { }
