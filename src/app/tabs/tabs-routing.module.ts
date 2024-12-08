import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'vista-inicio',
        loadChildren: () => import('../vista-inicio/vista-inicio.module').then(m => m.VistaInicioPageModule)
      },
      {
        path: 'vista-qr',
        loadChildren: () => import('../vista-qr/vista-qr.module').then(m => m.VistaQRPageModule)
      },
      {
        path: 'vista-config',
        loadChildren: () => import('../vista-config/vista-config.module').then(m => m.VistaConfigPageModule)
      },
      {
        path: 'vista-asignatura',
        loadChildren: () => import('../vista-asignatura/vista-asignatura.module').then(m => m.VistaAsignaturaPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
