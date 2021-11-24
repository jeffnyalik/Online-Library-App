import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { author_endpoint } from '../../../endpoints/author_url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../../../models/author/author';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  public BASE_URL = environment.BASE_URL;
  public AUTHOR_URL = author_endpoint.AUTHOR_URL;
  constructor(private http: HttpClient) { }

  getAllAuthors(): Observable<any>{
    return this.http.get<Author[]>(`${this.BASE_URL}${this.AUTHOR_URL}`);
  }
}
