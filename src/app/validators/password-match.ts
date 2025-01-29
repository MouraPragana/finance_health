import { AbstractControl, ValidationErrors } from "@angular/forms";

  export function passwordMatchValidator(group: AbstractControl): ValidationErrors  | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    // Retorna um erro caso as senhas não sejam iguais
    return password === confirmPassword ? null : {
      ['passwordMatch']: {
        valid: false,
        message: "Password and confirm password must be the same."
      }
    };
  }
