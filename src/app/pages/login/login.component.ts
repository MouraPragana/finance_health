import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultLayoutHomeComponent } from "../../components/default-layout-home/default-layout-home.component";
import { InputComponent } from '../../components/input/input.component';
interface LoginForm{
  email: FormControl,
  password: FormControl
}
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, DefaultLayoutHomeComponent, InputComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm>;

  constructor(private router: Router, private http: HttpClient){
    this.loginForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    })
  }

  submit(){

    this.http.post("http://localhost:3000/auth", {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }).subscribe()
  }

  redirect(path: string){
    this.router.navigate([path]);
  }
}
