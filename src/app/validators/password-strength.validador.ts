import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(!control.value) return null

    const password = control.value;
    const minLength = 8;
    const minLowerCase = 1;
    const minNumbers = 1;
    const minSymbols = 1;
    const minUpperCase = 1;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (
      password.length >= minLength &&
      hasLowerCase &&
      hasUpperCase &&
      hasNumbers &&
      hasSymbols
    ) {
      return null; // A senha é válida
    }

    const conditions = [
      { check: password.length < minLength, message: `At least ${minLength} characters.` },
      { check: !hasLowerCase, message: `At least ${minLowerCase} lowercase characters.` },
      { check: !hasUpperCase, message: `At least ${minUpperCase} uppercase characters.` },
      { check: !hasNumbers, message: `At least ${minNumbers} numbers.` },
      { check: !hasSymbols, message: `At least ${minSymbols} symbols.` }
    ];

    let arrayErrorsMessage: string[] = [];

    conditions.forEach(condition => {
      if (condition.check) {
        arrayErrorsMessage.push(condition.message);
      }
    });

    return {
      ['passwordStrength']: {
        valid: false,
        arrayErrorsMessage
      }
    };
  }
}
