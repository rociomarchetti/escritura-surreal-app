import { AuthService } from './../../auth/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  get adminSession() {
    return this.AuthService.adminSession
  }

  get loginControl() {
    return this.AuthService.loginControl;
  }

  get loggedUserName() {
    return this.AuthService.loggedUserName;
  }

  logout() {
    this.AuthService.logout();
  }

  constructor(public router: Router, private AuthService: AuthService) {}
}
