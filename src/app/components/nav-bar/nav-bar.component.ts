import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'rb-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  private loggedIn = false;

  constructor(private loginService: LoginService, private router: Router) {
    loginService.loggedIn$.subscribe(
      loggedIn => {
        this.loggedIn = loggedIn;
      }
    );
  }

  logout() {
    this.loginService.logout().subscribe(
      res => {

        this.loginService.publishLoggedIn(false);
      },
      error => {
        console.log(error);
      }
    );
    this.router.navigate(['/']);
  }
}
