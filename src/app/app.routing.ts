import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {AddNewBookComponent} from './components/add-new-book/add-new-book.component';
import {BookListComponent} from './components/book-list/book-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'addNewBook',
    component: AddNewBookComponent
  },
  {
    path: 'bookList',
    component: BookListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
