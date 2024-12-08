import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaResetPasswordPageRoutingModule } from './vista-reset-password-routing.module';

import { VistaResetPasswordPage } from './vista-reset-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaResetPasswordPageRoutingModule
  ],
  declarations: [VistaResetPasswordPage]
})
export class VistaResetPasswordPageModule {}
