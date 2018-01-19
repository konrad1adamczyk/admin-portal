import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Book} from '../../models/book';
import {GetBookService} from '../../services/get-book.service';

@Component({
  selector: 'rb-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  private book: Book = new Book();
  private bookId: number;

  constructor(private getBookService: GetBookService, private route: ActivatedRoute, private router: Router) {
  }

  onSelect(book: Book) {
    this.router.navigate(['/editBook', this.book.id]);
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    });

    this.getBookService.getBook(this.bookId).subscribe(
      res => {
        // console.log(JSON.parse(res));
        this.book = JSON.parse(res);
      },
      error => {
        console.log(error);
      }
    );


  }

}

