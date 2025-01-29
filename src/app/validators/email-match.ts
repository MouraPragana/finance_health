import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailMatchValidator(group: AbstractControl): ValidationErrors  | null {
  const email = group.get('email')?.value;
  const confirmEmail = group.get('confirmEmail')?.value;

  // Retorna um erro caso as senhas não sejam iguais
  return email === confirmEmail ? null : {
    ['emailMatch']: {
      valid: false,
      message: "Email and confirm email must be the same."
    }
  };
}
