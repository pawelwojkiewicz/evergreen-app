import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule
  ]
})
export class MaterialModule { }
