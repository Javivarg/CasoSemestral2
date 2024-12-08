import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'vista-inicio',
    loadChildren: () => import('./vista-inicio/vista-inicio.module').then( m => m.VistaInicioPageModule)
  },
  {
    path: 'vista-qr',
    loadChildren: () => import('./vista-qr/vista-qr.module').then( m => m.VistaQRPageModule)
  },
  {
    path: 'vista-config',
    loadChildren: () => import('./vista-config/vista-config.module').then( m => m.VistaConfigPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'vista-reset-password',
    loadChildren: () => import('./vista-reset-password/vista-reset-password.module').then( m => m.VistaResetPasswordPageModule)
  },
  {
    path: 'vista-asignatura',
    loadChildren: () => import('./vista-asignatura/vista-asignatura.module').then( m => m.VistaAsignaturaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
