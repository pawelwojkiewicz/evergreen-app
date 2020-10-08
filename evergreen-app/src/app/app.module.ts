import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { SidebarComponent } from './modules/home/components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
