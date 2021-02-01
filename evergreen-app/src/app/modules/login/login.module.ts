import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerComponent } from '@shared/components/color-picker/color-picker.component';
import { ValidationComponent } from './components/validation/validation.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [LoginComponent, ValidationComponent, ColorPickerComponent],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
})
export class LoginModule { }
