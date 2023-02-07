import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User } from './../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginControl: boolean = false;
  loggedUser: User | undefined; /* lo uso para el register */
  loggedUserName: string = '';
  loggedUserId: string = '';
  adminSession: boolean = false;

  /* Users CRUD methods */

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/user`, user);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/user/${id}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/user');
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`http://localhost:3000/user/${user.id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/user/${id}`);
  }

  /* User session methods */

  checkAuth(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }
    let id = localStorage.getItem('token');
    return this.http.get<User>(`http://localhost:3000/user/${id}`).pipe(
      map((auth) => {
        if (auth.id === 'cVsW9eQ') {
          this.adminSession = true;
        }
        this.loggedUserName = auth.name;
        return true;
      })
    );
  }

  saveSession(id: string): Observable<User> {
    if (id === 'cVsW9eQ') {
      this.adminSession = true;
    }
    this.loginControl = true;
    return this.http.get<User>(`http://localhost:3000/user/${id}`).pipe(
      tap((user) => localStorage.setItem('token', user.id)),
      tap((user) => localStorage.setItem('name', user.name)),
      tap((resp) => localStorage.setItem('control', 'true')),
      tap((user) => (this.loggedUserName = user.name))
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('control');
    this.loginControl = false;
    this.adminSession = false;
    this.router.navigate(['']);
  }

  /*  */

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('token')) {
      this.loggedUserId = localStorage.getItem('token')!;
    }
    if (localStorage.getItem('name')) {
      this.loggedUserName = localStorage.getItem('name')!;
    }
    if (localStorage.getItem('control')) {
      this.loginControl = true;
    }
  }
}
