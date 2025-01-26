import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../../components/button/button.component";
import { DefaultLayoutHomeComponent } from "../../components/default-layout-home/default-layout-home.component";
import { InputComponent } from '../../components/input/input.component';
import { Router } from '@angular/router';

interface RegisterForm{
  email: FormControl,
  confirmEmail: FormControl,
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
      email: new FormControl(""),
      confirmEmail: new FormControl(""),
      password: new FormControl(""),
      confirmPassword: new FormControl("")
    })
  }

  redirect(path: string){
    this.router.navigate([path])
  }

  submit(){
    console.log(this.registerForm.value.email, this.registerForm.value.confirmEmail, this.registerForm.value.password, this.registerForm.value.confirmPassword)
  }
}
