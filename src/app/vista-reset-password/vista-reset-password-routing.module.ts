import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaResetPasswordPage } from './vista-reset-password.page';

const routes: Routes = [
  {
    path: '',
    component: VistaResetPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaResetPasswordPageRoutingModule {}
