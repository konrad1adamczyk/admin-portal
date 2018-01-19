///<reference path="app.routing.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {
  MatButtonModule, MatListModule, MatSelectModule, MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {LoginComponent} from './components/login/login.component';
import {LoginService} from './services/login.service';
import {routing} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddNewBookComponent} from './components/add-new-book/add-new-book.component';
import {AddBookService} from './services/add-book.service';
import {UploadImageService} from './services/upload-image.service';
import {BookListComponent} from './components/book-list/book-list.component';
import {GetBookListService} from './services/get-book-list.service';
import {ViewBookComponent} from './components/view-book/view-book.component';
import {GetBookService} from './services/get-book.service';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import {EditBookService} from './services/edit-book.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    ViewBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule, MatToolbarModule, MatChipsModule, MatGridListModule, MatInputModule, MatFormFieldModule,
    MatSelectModule, MatSlideToggleModule, MatListModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
    LoginService,
    AddBookService,
    UploadImageService,
    GetBookListService,
    GetBookService,
    EditBookService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
