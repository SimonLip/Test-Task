import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: string = '';

  checkPasswordStrength() {
    if (this.password.length === 0) {
      this.passwordStrength = ''; // Змінено на порожній рядок, якщо поле порожнє
    } else if (this.password.length < 8) {
      this.passwordStrength = 'weak';
    } else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) && /[!@#$%^&*()_+[\]{};':"\\|,.<>?]/.test(this.password)) {
      this.passwordStrength = 'strong';
    } else {
      this.passwordStrength = 'medium';
    }
  }
}
