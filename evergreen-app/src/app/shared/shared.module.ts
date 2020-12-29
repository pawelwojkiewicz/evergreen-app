import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MaterialModule } from '../modules/material/material.module';
import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';



@NgModule({
  declarations: [ErrorDialogComponent, LoadingDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ErrorDialogComponent],
})
export class SharedModule { }
