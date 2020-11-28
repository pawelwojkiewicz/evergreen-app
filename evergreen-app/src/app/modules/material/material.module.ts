import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  exports: [
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
