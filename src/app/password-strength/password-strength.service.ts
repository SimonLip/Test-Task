import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  checkPasswordStrength(password: string): string {
    if (password.length === 0) {
      return '';
    } else if (password.length < 8) {
      return 'weak';
    } else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+[\]{};':"\\|,.<>?]/.test(password)) {
      return 'strong';
    } else {
      return 'medium';
    }
  }
}
