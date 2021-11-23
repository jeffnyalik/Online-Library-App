import { Book } from './../../../models/book/book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { book_endpoint } from 'src/endpoints/book_url';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  public BASE_URL = environment.BASE_URL;
  public BOOK_URL = book_endpoint.BOOK_URL;
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<any>{
    return this.http.get<Book[]>(`${this.BASE_URL}${this.BOOK_URL}`);
  }
}
