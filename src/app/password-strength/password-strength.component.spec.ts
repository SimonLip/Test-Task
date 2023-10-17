import { Component } from '@angular/core';
import { PasswordStrengthService } from './password-strength.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  getPasswordStrengthColor() {
    const strength = this.passwordStrengthService.checkPasswordStrength(this.password);
    return strength === 'weak' ? 'red' : strength === 'medium' ? 'yellow' : 'green';
  }

  getPasswordStrengthText() {
    const strength = this.passwordStrengthService.checkPasswordStrength(this.password);
    return strength === 'weak' ? 'Слабкий' : strength === 'medium' ? 'Середній' : 'Міцний';
  }
}
