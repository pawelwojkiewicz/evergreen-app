import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
import { style } from '@angular/animations';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @Input() clickedColor = 'red';
  @Input() clickedTransform = 'translateX(50px)';

  @HostBinding('style.transform') transform: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click') click(eventData: Event): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.clickedColor);
    this.transform = this.clickedTransform;
  }
}
