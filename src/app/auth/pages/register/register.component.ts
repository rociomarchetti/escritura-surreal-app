import { User } from './../../interfaces/auth.interface';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

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
    newUserEmail: ['', [Validators.required]],
    newUserPassword: ['', [Validators.required]],
  });

  createNewUser() {
    this.newUser.name = this.newUserForm.value.newUserName;
    this.newUser.email = this.newUserForm.value.newUserEmail;
    this.newUser.password = this.newUserForm.value.newUserPassword;

    this.AuthService.registerUser(this.newUser).subscribe((newUser) => {
      this.AuthService.loggedUser = newUser;
      this.AuthService.loginControl = true;
    });
  }

  constructor(private fb: FormBuilder, private AuthService: AuthService) {}
}
