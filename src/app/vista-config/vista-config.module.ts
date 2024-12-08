import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaConfigPageRoutingModule } from './vista-config-routing.module';

import { VistaConfigPage } from './vista-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaConfigPageRoutingModule
  ],
  declarations: [VistaConfigPage]
})
export class VistaConfigPageModule {}
