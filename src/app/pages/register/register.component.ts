import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../../components/button/button.component";
import { DefaultLayoutHomeComponent } from "../../components/default-layout-home/default-layout-home.component";
import { InputComponent } from '../../components/input/input.component';
import { Router } from '@angular/router';

interface RegisterForm{
  login: FormControl,
  confirmLogin: FormControl,
  password: FormControl
  confirmPassword: FormControl
}

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, DefaultLayoutHomeComponent, DefaultLayoutHomeComponent, InputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup<RegisterForm>;

  constructor(private router: Router){
    this.registerForm = new FormGroup({
      login: new FormControl(""),
      confirmLogin: new FormControl(""),
      password: new FormControl(""),
      confirmPassword: new FormControl("")
    })
  }

  redirect(path: string){
    this.router.navigate([path])
  }

  submit(){
    console.log(this.registerForm.value.login, this.registerForm.value.confirmLogin, this.registerForm.value.password, this.registerForm.value.confirmPassword)
  }
}
