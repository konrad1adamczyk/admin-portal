///<reference path="app.routing.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {LoginComponent} from './components/login/login.component';
import {LoginService} from './services/login.service';
import {routing} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,


    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule, MatToolbarModule, MatChipsModule, MatGridListModule, MatInputModule, MatFormFieldModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
