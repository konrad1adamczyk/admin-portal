import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';


@Component({
  selector: 'rb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private credential = {'username': '', 'password': ''};
  private loggedIn = false;

  constructor(private loginService: LoginService) {
    loginService.loggedIn$.subscribe(
      loggedIn => {
        this.loggedIn = loggedIn;
      }
    );
  }

  onSubmit() {
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(

      res => {
        localStorage.setItem('xAuthToken', res['token']);
        // this.loggedIn = true;
        this.loginService.publishLoggedIn(true);
      },
      error => {
        console.log(error);
      }
    );
  }

}
