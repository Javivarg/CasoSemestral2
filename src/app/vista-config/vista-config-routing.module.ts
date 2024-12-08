import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaConfigPage } from './vista-config.page';

const routes: Routes = [
  {
    path: '',
    component: VistaConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaConfigPageRoutingModule {}
