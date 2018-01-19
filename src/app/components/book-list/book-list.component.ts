import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {GetBookListService} from '../../services/get-book-list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'rb-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private selectedBook: Book;
  private checked: boolean;
  private bookList: Book[];
  private allChecked: boolean;
  private removeBookList: Book[] = new Array();

  constructor(private getBookListService: GetBookListService, private router: Router) {
  }

  ngOnInit() {
    this.getBookListService.getBookList().subscribe(
      res => {
        console.log(JSON.parse(res));
        this.bookList = JSON.parse(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
