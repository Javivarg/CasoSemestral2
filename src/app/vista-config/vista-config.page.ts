import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vista-config',
  templateUrl: './vista-config.page.html',
  styleUrls: ['./vista-config.page.scss'],
})
export class VistaConfigPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {
  }

  toggleTheme() {
    document.body.classList.toggle('dark', !document.body.classList.contains('dark'));
  }

  async cerrarSesion() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Cerrar sesión',
          handler: () => {
            localStorage.removeItem('usuario'); // Elimina el usuario de LocalStorage
            this.router.navigate(['/login']); // Redirige a la página de inicio
          }
        }
      ]
    });

    await alert.present();
  }

}

