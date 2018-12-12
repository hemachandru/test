import {FormGroup, FormControl, Validators, FormsModule} from '@angular/forms';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
// import { AuthGuard } from './services/auth-guard.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from './auth-routing.module';

import { reducers } from './store/reducers';
import { AuthEffects } from './store/effects/auth.effect';
import { SignUpComponent } from './container/sign-up/sign-up.component';

import { ApiUrl } from '../../environments/environment';

import { AuthBusiness } from './business/auth.business';

import { HttpModule } from '@angular/http';
import { Config } from '../config/constant'

import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { InvalidKeyTokenComponent } from './components/invalid-key-token/invalid-key-token.component';

import { AuthService } from './services/auth.service';

import { VerificationFormComponent } from './components/verification-form/verification-form.component';
// import { UserDetailService } from './services/user-detail.service';

import { AccountVideoBannerComponent } from './../core/components/account-video-banner/account-video-banner.component';

export const COMPONENTS = [
  LoginComponent,
  SignupFormComponent,
  ForgetPasswordComponent,
  ResetPasswordComponent,
  VerificationFormComponent,
  InvalidKeyTokenComponent,
  AccountVideoBannerComponent
];

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, HttpModule],
  declarations: COMPONENTS
})
export class AuthModule {
  static forRoot() {
    return {
      ngModule: RootAuthModule,
      // providers: [AuthBusiness, AuthService,UserDetailService, Config] //AuthGuard
      providers: [AuthBusiness, AuthService, Config] //AuthGuard
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class RootAuthModule {}