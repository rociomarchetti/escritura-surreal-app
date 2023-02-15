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
  submitMSG: string = '';

  userForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
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
        this.router.navigate(['']);
        this.saveActiveSession(user);
        this.userForm.reset();
      } else {
        this.submitMSG = 'Los datos ingresados no parecen ser correctos.';
      }
    });
  }

  invalid(field: string) {
    return (
      this.userForm.get(field)?.invalid && this.userForm.get(field)?.touched
    );
  }

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router
  ) {}
}
