import { User } from './../../interfaces/auth.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

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
      console.log('Se han guardado los datos en el localstorage: ', resp)
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
        /* alert('you are successfully login'); */
        console.log(user);
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
    private router: Router,
    private http: HttpClient
  ) {}
}
