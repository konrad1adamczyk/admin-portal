import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {AppComponent} from './app.component';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,

    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
