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
import { LoadingPipe } from './pipes/loading.pipe';
import { ToSlugPipe } from './pipes/to-slug.pipe';



const shared = [
  ErrorDialogComponent,
  LoadingDialogComponent,
  ConfirmComponentComponent,
  ToSlugPipe,
  EllipsisPipe,
  LoadingPipe,
  MyngifDirective,
  BackgroundDirective,
  ConfirmClickDirective,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
<<<<<<< HEAD
    shared,
  ],
  declarations: [
    shared,
=======
    ...shared,
  ],
  declarations: [
    ...shared,

>>>>>>> 07ec142fb34d6307db22036d93d72afb3d18afc6
  ]
})
export class SharedModule { }
