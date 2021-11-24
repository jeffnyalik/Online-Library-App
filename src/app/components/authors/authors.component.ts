import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/authors/author.service';
import { Author } from '../../../models/author/author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  author: Author[] = [];
  constructor(private auth: AuthorService) { }

  ngOnInit(): void {
    this.auth.getAllAuthors().subscribe((author: Author[]) =>{
      this.author = author;
      console.log(this.author)
    }, error=>{
      console.log(error);
    });
  }

}
