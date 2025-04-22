import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/api/token/';
  private usernameSubject = new BehaviorSubject<string | null>(localStorage.getItem('username'));
  username$ = this.usernameSubject.asObservable(); 

  constructor(private http: HttpClient) {}

  login(data: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(this.baseUrl, data).pipe(
      tap((res) => {
        this.saveToken(res.access);
        this.saveUsername(data.username);
      })
    );
  }

  saveUsername(username: string): void {
    localStorage.setItem('username', username);
    this.usernameSubject.next(username); 
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    this.usernameSubject.next(null);
  }
}
