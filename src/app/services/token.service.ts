import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  authToken: string

  constructor(private http: HttpClient, private router: Router) {
    this.authToken = "auth-token"
   }

  saveAuthToken(token: string): void{
    this.cleanAuthToken();
    localStorage.setItem(this.authToken, token);
  }

  cleanAuthToken(): void{
    localStorage.removeItem(this.authToken)
  }

  getAuthToken(): string | null{
    return localStorage.getItem(this.authToken)
  }

  async verifyAuthToken(path: string) {
    this.http.post("http://localhost:3000/auth/verify-token", {}).subscribe({
      next: (data) => {
        this.router.navigate([path]);
      },
      error: (error) => {
        this.cleanAuthToken();
      }
    })
  }
}
