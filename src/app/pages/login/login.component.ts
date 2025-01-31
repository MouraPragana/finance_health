import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { DefaultLayoutHomeComponent } from "../../components/default-layout-home/default-layout-home.component";
import { InputComponent } from '../../components/input/input.component';
import { TokenService } from '../../services/token.service';
import { passwordStrengthValidator } from '../../validators/password-strength.validador';

export interface LoginForm{
  email: FormControl,
  password: FormControl
}

interface LoginResponse{
  access_token : string
}
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, DefaultLayoutHomeComponent, InputComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm>;

  constructor(private router: Router, private http: HttpClient, private toastr: ToastrService, private tokenService: TokenService){
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, passwordStrengthValidator()])
    })
  }

  ngOnInit() {
    this.tokenService.verifyAuthToken("finances")
  }

  async submit(){
    try {
      const result = await firstValueFrom(this.http.post<LoginResponse>("http://localhost:3000/auth", {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }))

      this.tokenService.saveAuthToken(result.access_token);
      this.redirect("finances");
      this.toastr.success("Login successful.");
    } catch {
      this.toastr.error("Invalid email/password. Please try again later.");
    }
  }

  redirect(path: string){
    this.router.navigate([path]);
  }
}
