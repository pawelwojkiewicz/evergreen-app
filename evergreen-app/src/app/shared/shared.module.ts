import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MaterialModule } from '../modules/material/material.module';
import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';
import { ToSlugPipe } from './pipes/to-slug.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { MyngifDirective } from './directives/myngif.directive';
import { FormsModule } from '@angular/forms';
import { BackgroundDirective } from './directives/background.directive';
import { ConfirmClickDirective } from './directives/confirm-click.directive';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ErrorDialogComponent,
    LoadingDialogComponent,
    ToSlugPipe,
    MaterialModule,
    EllipsisPipe,
    MyngifDirective,
    FormsModule,
    BackgroundDirective,
    ConfirmClickDirective
  ],
  declarations: [
    ErrorDialogComponent,
    LoadingDialogComponent,
    ToSlugPipe,
    EllipsisPipe,
    MyngifDirective,
    BackgroundDirective,
    ConfirmClickDirective
  ]
})
export class SharedModule { }
