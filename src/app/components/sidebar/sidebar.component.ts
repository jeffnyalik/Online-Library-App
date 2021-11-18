import { Component, OnInit } from '@angular/core';
import {} from '@fortawesome/fontawesome-svg-core'
import { faBook, faCoffee, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faCoffee = faCoffee;
  faBook = faBook;
  faUsers = faUsers;
  constructor() { }

  ngOnInit(): void {
  }

}
