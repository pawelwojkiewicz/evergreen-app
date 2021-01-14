import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [HomeComponent, SidebarComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule { }
