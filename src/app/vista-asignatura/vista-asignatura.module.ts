import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaAsignaturaPageRoutingModule } from './vista-asignatura-routing.module';

import { VistaAsignaturaPage } from './vista-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaAsignaturaPageRoutingModule
  ],
  declarations: [VistaAsignaturaPage]
})
export class VistaAsignaturaPageModule {}
