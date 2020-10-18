import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PatientsService } from 'src/app/core/services/patients.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Patient } from 'src/app/shared/types/patient.type';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements AfterViewInit {
  patients: Patient[];
  displayedColumns: string[] = ['select', 'name', 'number', 'gender', 'birth', 'access'];
  dataSource: MatTableDataSource<Patient>;
  selection = new SelectionModel<Patient>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private patientsService: PatientsService) {
    this.patients = this.patientsService.getPatients();
    this.dataSource = new MatTableDataSource(this.patients);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Patient): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }
}


