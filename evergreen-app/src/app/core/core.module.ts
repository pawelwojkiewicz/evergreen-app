import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ErrorHandlerModule } from './errors/error-handler/error-handler.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ErrorHandlerModule
  ]
})
export class CoreModule { }
