import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  async iniciarSesion() {
    // Credenciales estáticas
    const adminEmail = 'admin';
    const adminPassword = 'admin';

    if (this.email === adminEmail && this.password === adminPassword) {
      // Guardar datos en LocalStorage
      localStorage.setItem(
        'usuario',
        JSON.stringify({
          email: this.email,
          nombre: 'Administrador',
        })
      );

      // Navegar a la vista1 después de inicio de sesión exitoso
      this.navCtrl.navigateForward('/tabs/vista-inicio', {
        queryParams: {
          nombre: 'Administrador',
          email: this.email,
        },
      });
    } else {
      // Muestra un mensaje de error si las credenciales son incorrectas
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Correo o contraseña incorrectos.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  
  ngOnInit() {
    const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');
    if (usuario && usuario.email) {
      // Si el usuario ya está autenticado, redirige a vista1
      this.navCtrl.navigateForward('/tabs/vista-inicio', {
        queryParams: {
          nombre: usuario.nombre || 'Usuario',
          email: usuario.email,
        },
      });
    } else {
      console.log('No hay datos de usuario en el localStorage');
    }
  }

}
