import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { User } from './../../interfaces/auth.interface';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.component.html',
  styleUrls: ['./verify-password.component.css'],
})
export class VerifyPasswordComponent {
/*   loggedUser: User = {
    id: '',
    name: '',
    email: '',
    password: '',
  };

  passwordForm: FormGroup = this.fb.group({
    userEmail: ['', [Validators.required]],
    userfirstTrypassword: ['', [Validators.required]],
    userSecondTrypassword: ['', [Validators.required]],
  });

  changePassword() {
    console.log('change password activado');
    if (
      this.passwordForm.value.userfirstTrypassword ===
      this.passwordForm.value.userSecondTrypassword
    ) {
      this.loggedUser.password = this.passwordForm.value.userSecondTrypassword;
      this.AuthService.updateUser(this.loggedUser).subscribe((user) =>
        console.log('Su contraseña ha sido correctamente actualizada', user)
      );
    } else {
      alert('Las contraseñas no coinciden');
    }
  }

  checkAuth() {
    this.AuthService.getUsers().subscribe((resp) => {
      let user = resp.find((a: User) => {
        console.log('Usuario encontrado');
        return a.email === this.passwordForm.value.email;
      });

      if (user) {
        this.loggedUser = user;
        this.changePassword();
      } else {
        alert('Usuario no registrado');
      }
    });
  } */

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}
}
