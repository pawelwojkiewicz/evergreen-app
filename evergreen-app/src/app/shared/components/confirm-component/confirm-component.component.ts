import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-component',
  templateUrl: './confirm-component.component.html',
  styleUrls: ['./confirm-component.component.scss']
})
export class ConfirmComponentComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public confirmMessage: string
  ) { }
}
