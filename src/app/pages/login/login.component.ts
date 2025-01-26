import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultLayoutHomeComponent } from "../../components/default-layout-home/default-layout-home.component";
import { InputComponent } from '../../components/input/input.component';
import { CommonModule } from '@angular/common';
interface LoginForm{
  login: FormControl,
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

  constructor(private router: Router){
    this.loginForm = new FormGroup({
      login: new FormControl(""),
      password: new FormControl("")
    })
  }

  submit(){
    console.log(this.loginForm.value.login, this.loginForm.value.password)
  }

  redirect(path: string){
    this.router.navigate([path]);
  }
}
