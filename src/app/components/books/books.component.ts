import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book/book';
import { BookService } from '../../services/books/book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book: Book[] = [];
  public p: number = 1;
  constructor(private bs: BookService) { }

  ngOnInit(): void {
    this.bs.getAllBooks().subscribe((book: Book[]) =>{
      this.book = book;
      console.log(this.book);
    })
  }

}
