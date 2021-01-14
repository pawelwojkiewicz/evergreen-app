import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';
import { ConfirmComponentComponent } from './components/confirm-component/confirm-component.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';
import { BackgroundDirective } from './directives/background.directive';
import { ConfirmClickDirective } from './directives/confirm-click.directive';
import { MyngifDirective } from './directives/myngif.directive';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { ToSlugPipe } from './pipes/to-slug.pipe';





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
    ConfirmClickDirective,
    ConfirmComponentComponent
  ]
})
export class SharedModule { }
