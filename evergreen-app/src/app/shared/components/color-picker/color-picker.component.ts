import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true,
    },
  ],
})
export class ColorPickerComponent {

  colors = ['#7489ff', '#43d65d', '#d65943', '#d643a7'];
  selectedColor = '';
  private onChange: any;
  private onTouch: any;

  writeValue(obj: any): void {
    this.selectedColor = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  colorClicked(color: string): void {
    this.selectedColor = color;
    this.onChange(this.selectedColor);
    this.onTouch(true);
  }
}
