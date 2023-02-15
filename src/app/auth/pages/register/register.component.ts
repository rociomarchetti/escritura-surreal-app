import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { User } from './../../interfaces/auth.interface';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  newUser: User = {
    id: '',
    name: '',
    email: '',
    password: '',
  };

  newUserForm: FormGroup = this.fb.group({
    newUserName: ['', [Validators.required]],
    newUserEmail: ['', [Validators.required, Validators.email]],
    newUserPassword: ['', [Validators.required, Validators.minLength(4)]],
  });

  createNewUser() {
    this.newUser.name = this.newUserForm.value.newUserName;
    this.newUser.email = this.newUserForm.value.newUserEmail;
    this.newUser.password = this.newUserForm.value.newUserPassword;

    this.AuthService.registerUser(this.newUser).subscribe((newUser) => {
      this.router.navigate(['']);
      this.saveActiveSession(newUser);
    });
  }

  saveActiveSession(user: User) {
    this.AuthService.saveSession(user.id).subscribe((resp) =>
      console.log(resp)
    );
  }

  invalid(field: string) {
    return (
      this.newUserForm.get(field)?.invalid &&
      this.newUserForm.get(field)?.touched
    );
  }

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router
  ) {}
}
