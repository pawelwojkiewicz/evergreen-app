import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

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

  @HostListener('click') click(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.clickedColor);
    this.transform = this.clickedTransform;
  }
}
