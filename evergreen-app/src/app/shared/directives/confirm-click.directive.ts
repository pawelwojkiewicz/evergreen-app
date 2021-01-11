import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmClick]'
})
export class ConfirmClickDirective {

  @Input('appConfirmClick') message: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) {
  }

  @HostListener('click') click(e: Event): void {
    confirm(this.message);
    console.log('When confirm make next logic');
  }
}
