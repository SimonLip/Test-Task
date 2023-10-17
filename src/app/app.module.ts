import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { PasswordStrengthService } from './password-strength/password-strength.service';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PasswordStrengthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
