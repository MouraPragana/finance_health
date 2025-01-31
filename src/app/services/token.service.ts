import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  authToken: string
  refreshToken: string

  constructor(private http: HttpClient, private router: Router) {
    this.authToken = "auth-token"
    this.refreshToken = "refresh-token"
   }

  saveAuthToken(token: string): void{
    this.cleanAuthToken();
    localStorage.setItem(this.authToken, token);
  }

  cleanAuthToken(): void{
    localStorage.removeItem(this.authToken)
  }

  cleanRefreshToken(): void {
    localStorage.removeItem(this.refreshToken)
  }

  getAuthToken(): string | null{
    return localStorage.getItem(this.authToken)
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshToken)
  }

  async verifyAuthToken(path?: string): Promise<boolean> {
    try {
      await firstValueFrom(this.http.post("http://localhost:3000/auth/verify-token", {}))

      if (path){
        this.router.navigate([path])
      }

      return true;
    } catch {
      this.cleanAuthToken();
      return false;
    }
  }
}
