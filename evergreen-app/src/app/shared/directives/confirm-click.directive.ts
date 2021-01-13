import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponentComponent } from '../components/confirm-component/confirm-component.component';

@Directive({
  selector: '[appConfirmClick]'
})
export class ConfirmClickDirective {

  @Input() confirmMessage: string;
  @Output() appConfirmClick = new EventEmitter<MouseEvent>();

  constructor(private dialog: MatDialog) { }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const dialogRef = this.dialog.open(ConfirmComponentComponent, {
      data: this.confirmMessage,
      maxHeight: '100%',
      width: '540px',
      maxWidth: '100%',
      disableClose: false,
      hasBackdrop: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.appConfirmClick.emit();
      } else {
        return;
      }
    });
  }
}
