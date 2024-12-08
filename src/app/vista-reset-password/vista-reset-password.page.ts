import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-reset-password',
  templateUrl: './vista-reset-password.page.html',
  styleUrls: ['./vista-reset-password.page.scss'],
})
export class VistaResetPasswordPage {
  email: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  /* Funcion para simular la recuperacion de contraseña */
  async resetPassword() {
    if (this.email && this.email.includes('@')) {
      const alert = await this.alertController.create({
        header: 'Correo Enviado',
        message: 'Si este correo está registrado, recibirás un enlace para restablecer la contraseña.',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.router.navigate(['/home']);
          }
        }]
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor ingresa un correo válido.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}