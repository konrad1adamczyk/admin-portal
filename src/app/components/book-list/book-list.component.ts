import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {GetBookListService} from '../../services/get-book-list.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';
import {RemoveBookService} from '../../services/remove-book.service';

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

  constructor(private getBookListService: GetBookListService,
              private removeBookService: RemoveBookService,
              private router: Router,
              public dialog: MatDialog) {
  }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/viewBook', this.selectedBook.id]);
  }

  openDialog(book: Book) {
    const dialogRef = this.dialog.open(DialogResultExample);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if (result === 'yes') {
          this.removeBookService.sendBook(book.id).subscribe(
            res => {
              console.log(res);
              this.getBookList();
            },
            error => {
              console.log(error);
            }
          );
        }
      }
    );
  }

  updateRemoveBookList(checked: boolean, book: Book) {
    if (checked) {
      this.removeBookList.push(book);
    } else {
      this.removeBookList.splice(this.removeBookList.indexOf(book), 1);
    }
  }

  updateSelected(checked: boolean) {
    if(checked) {
      this.allChecked = true;
      this.removeBookList = this.bookList.slice();
    } else {
      this.allChecked = false;
      this.removeBookList = [];
    }
  }

  removeSelectedBooks() {
    const dialogRef = this.dialog.open(DialogResultExample);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if (result === 'yes') {
          for (let book of this.removeBookList) {
            this.removeBookService.sendBook(book.id).subscribe(
              res => {
                this.getBookList();
              },
              error => {
              }
            );
          }

        }
      }
    );
  }

  getBookList() {
    this.getBookListService.getBookList().subscribe(
      res => {
        // console.log(JSON.parse(res));
        this.bookList = JSON.parse(res);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getBookList();
  }

}

@Component({
  selector: 'rb-dialog-result-example-dialog',
  templateUrl: './rb-dialog-result-example-dialog.html',

})

export class DialogResultExample {
  constructor(public dialogRef: MatDialogRef<DialogResultExample>) {
  }
}
