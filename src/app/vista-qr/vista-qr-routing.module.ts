import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaQRPage } from './vista-qr.page';

const routes: Routes = [
  {
    path: '',
    component: VistaQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaQRPageRoutingModule {}
