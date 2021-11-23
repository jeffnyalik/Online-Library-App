
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { faBook, faCoffee, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { BookService } from '../../services/books/book.service';
import { Book } from '../../../models/book/book';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faCoffee = faCoffee;
  faBook = faBook;
  faUsers = faUsers;
  book: Book[] = [];
  public p: number = 1;
  constructor(private bService: BookService) {

  }

  ngOnInit(): void {
    this.bService.getAllBooks().subscribe((book: Book[])=>{
      this.book = book
      console.log(this.book)
    }, error=>{console.log(error)})
  }

}
