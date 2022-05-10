import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { DatingComponent } from './dating/dating.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DatingComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
