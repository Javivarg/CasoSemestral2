import { Component, OnInit } from '@angular/core';
import { QrScannerServiceService } from '../services/qr-scanner-service.service'; // Ajusta la ruta si es necesario
import { AlertController } from '@ionic/angular'; // Importa AlertController

@Component({
  selector: 'app-vista-qr',
  templateUrl: './vista-qr.page.html',
  styleUrls: ['./vista-qr.page.scss'],
})
export class VistaQRPage implements OnInit {
  scannedResults: string[] = [];
  errorMessage: string | null = null;

  sigla: string = '';
  seccion: string = '';
  sala: string = '';
  fecha: string = '';

  constructor(private qrScannerService: QrScannerServiceService,private alertController: AlertController) {}

  async ngOnInit() {
    try {
      await this.qrScannerService.init();
    } catch (error) {
      this.errorMessage = 'Error al inicializar el escáner.';
      console.error(error);
    }
  }

  async SaveAsist() {
    // Mostrar alerta de confirmación
    const confirmAlert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas guardar la asistencia?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Guardado cancelado');
          }
        },
        {
          text: 'Guardar',
          handler: async () => {
            // Limpiar los campos
            this.fecha = '';
            this.sigla = '';
            this.seccion = '';
            this.sala = '';
            this.errorMessage = null;
            this.scannedResults = [];

            // Mostrar mensaje de asistencia guardada
            const savedAlert = await this.alertController.create({
              header: 'Éxito',
              message: 'Asistencia guardada.',
              buttons: ['OK']
            });

            await savedAlert.present();
          }
        }
      ]
    });

    await confirmAlert.present();
  }

  async scanBarcode() {
    try {
      this.errorMessage = null;
      this.scannedResults = await this.qrScannerService.scan();

      if (this.scannedResults.length > 0) {
        this.processScannedData(this.scannedResults[0]);
      } else {
        this.errorMessage = 'No se detectaron códigos QR o barras.';
      }
    } catch (error) {
      this.errorMessage = 'Ocurrió un error al escanear el código QR.';
      console.error('Error al escanear:', error);
    }
  }

  processScannedData(data: string) {
    const parts = data.split('|');

    if (parts.length === 4) {
      this.sigla = parts[0];
      this.seccion = parts[1];
      this.sala = parts[2];
      this.fecha = this.formatDate(parts[3]);
    } else {
      this.errorMessage = 'El código QR escaneado no tiene el formato esperado.';
      console.error('Formato de QR inválido:', data);
    }
  }

  formatDate(date: string): string {
    if (date.length === 8) {
      const year = date.substring(0, 4);
      const month = date.substring(4, 6);
      const day = date.substring(6, 8);
      return `${day}/${month}/${year}`;
    }
    return 'Fecha inválida';
  }
}

