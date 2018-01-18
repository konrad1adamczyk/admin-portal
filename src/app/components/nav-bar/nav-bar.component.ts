import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'rb-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private loggedIn = false;

  constructor(private loginService: LoginService, private router: Router) {

  }

  logout() {
    this.loginService.logout().subscribe(
      res => {

        location.reload();
      },
      error => {
        console.log(error);
      }
    );
    this.router.navigate(['/']);

  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      data => {
        this.loggedIn = true;
      },
      error => {
        this.loggedIn = false;
      }
    );
  }
}
