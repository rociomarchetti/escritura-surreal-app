import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { User } from './../../interfaces/auth.interface';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  saveActiveSession(user: User) {
    this.AuthService.saveSession(user.id).subscribe((resp) =>
      console.log(resp)
    );
  }

  login() {
    this.AuthService.getUsers().subscribe((resp) => {
      let user = resp.find((a: User) => {
        return (
          a.email === this.userForm.value.email &&
          a.password === this.userForm.value.password
        );
      });
      if (user) {
        this.saveActiveSession(user);
        /* this.userForm.reset(); */
      } else {
        alert('User Not Found');
      }
      this.router.navigate(['texts/archive']);
    });
  }

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router
  ) {}
}
