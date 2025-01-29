import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DefaultLayoutHomeComponent } from "../../components/default-layout-home/default-layout-home.component";
import { InputComponent } from '../../components/input/input.component';
import { TokenService } from '../../services/token.service';
import { emailMatchValidator } from '../../validators/email-match';
import { passwordMatchValidator } from '../../validators/password-match';
import { passwordStrengthValidator } from '../../validators/password-strength.validador';

export interface RegisterForm{
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

  constructor(private router: Router, private tokenService: TokenService){
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      confirmEmail: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, passwordStrengthValidator()]),
      confirmPassword: new FormControl("", Validators.required)
    }, {
      validators: [passwordMatchValidator, emailMatchValidator]
    });
  }

  ngOnInit() {
    this.tokenService.verifyAuthToken("finances")
  }

  redirect(path: string){
    this.router.navigate([path])
  }

  submit(){
    console.log(this.registerForm.value.email, this.registerForm.value.confirmEmail, this.registerForm.value.password, this.registerForm.value.confirmPassword)
  }
}
