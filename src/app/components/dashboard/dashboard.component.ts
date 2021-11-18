import { Component, OnInit } from '@angular/core';
import {} from '@fortawesome/fontawesome-svg-core'
import { faBook, faCoffee, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faCoffee = faCoffee;
  faBook = faBook;
  faUsers = faUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
