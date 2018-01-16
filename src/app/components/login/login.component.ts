import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'rb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'username': '', 'password': ''};
  private loggedIn = false;

  constructor() {
  }

  ngOnInit() {
  }

}