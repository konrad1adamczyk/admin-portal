import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';


@Component({
  selector: 'rb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'username': '', 'password': ''};
  private loggedIn = false;

  constructor(private loginService: LoginService) {
  }

  onSubmit() {
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(

      res => {
        localStorage.setItem('xAuthToken', res['token']);
        this.loggedIn = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },
      error => {
        this.loggedIn = false;
      }
    );
  }
}
