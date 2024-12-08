import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaAsignaturaPage } from './vista-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: VistaAsignaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaAsignaturaPageRoutingModule {}
