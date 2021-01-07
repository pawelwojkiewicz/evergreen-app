import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MaterialModule } from '../modules/material/material.module';
import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';
import { ToSlugPipe } from './pipes/to-slug.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';



@NgModule({
  declarations: [ErrorDialogComponent, LoadingDialogComponent, ToSlugPipe, EllipsisPipe],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ErrorDialogComponent, LoadingDialogComponent, ToSlugPipe, MaterialModule, EllipsisPipe],
})
export class SharedModule { }
