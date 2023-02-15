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

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}
}
