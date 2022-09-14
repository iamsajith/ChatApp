import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import { AuthRoutingModule } from './auth-routing.module';
import { CheckUsernameComponent } from './check-username/check-username.component';
import { SetPasswordComponent } from './set-password/set-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    CheckUsernameComponent,
    SetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
