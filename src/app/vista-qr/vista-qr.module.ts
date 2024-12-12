import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaQRPageRoutingModule } from './vista-qr-routing.module';
import { VistaQRPage } from './vista-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaQRPageRoutingModule
  ],
  declarations: [VistaQRPage]
})
export class VistaQRPageModule {}
