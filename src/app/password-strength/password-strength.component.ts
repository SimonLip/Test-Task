import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';

  checkPasswordStrength() {
    if (this.password.length === 0) {
      return '';
    } else if (this.password.length < 8) {
      return 'weak';
    } else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) && /[!@#$%^&*()_+[\]{};':"\\|,.<>?]/.test(this.password)) {
      return 'strong';
    } else {
      return 'medium';
    }
  }

  getPasswordStrengthColor() {
    const strength = this.checkPasswordStrength();
    return strength === 'weak' ? 'red' : strength === 'medium' ? 'yellow' : 'green';
  }

  getPasswordStrengthText() {
    const strength = this.checkPasswordStrength();
    return strength === 'weak' ? 'Слабкий' : strength === 'medium' ? 'Середній' : 'Міцний';
  }
}
