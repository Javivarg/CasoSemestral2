import { Component, OnInit } from '@angular/core';
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vista-qr',
  templateUrl: './vista-qr.page.html',
  styleUrls: ['./vista-qr.page.scss'],
})
export class VistaQRPage implements OnInit {

  result: string = '';
  sigla: string = '';
  seccion: string = '';
  sala: string = '';
  fecha: string = '';

  constructor(private alertController: AlertController) {}
  
  // Método para escanear el código QR
  async scan() {
    try {
      const options = {
        hint: 17, // 17 es el valor para QR Code
        cameraDirection: 1, // 1 es la cámara trasera
      };

      // Llamada al método scanBarcode, usando 'this' para acceder a la propiedad result
      const scannedResult = await CapacitorBarcodeScanner.scanBarcode(options);

      this.result = scannedResult.ScanResult
      
      this.processScannedData(this.result); // Procesamos el resultado escaneado

    } catch (e) {
      console.error("Error scanning barcode: ", e);
    }
  }

  // Método para guardar la asistencia y mostrar la alerta
  async asistsave() {
    this.result = '';
    this.sigla = '';
    this.seccion = '';
    this.sala = '';
    this.fecha = '';

    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: 'Asistencia guardada',
      buttons: ['OK']
    });
    
    await alert.present(); // Mostrar la alerta
  }

  // Método para procesar los datos escaneados
  processScannedData(data: string) {
    // Suponiendo que el formato es "PGY4121|012D|L9|20241104"
    const parts = data.split('|');

    if (parts.length === 4) {
      this.sigla = parts[0];
      this.seccion = parts[1];
      this.sala = parts[2];
      this.fecha = this.formatDate(parts[3]); // Formatear la fecha
    } else {
      console.error('Formato de QR inválido');
    }
  }

  // Método para formatear la fecha (de formato YYYYMMDD a DD/MM/YYYY)
  formatDate(date: string): string {
    if (date.length === 8) {
      const year = date.substring(0, 4);
      const month = date.substring(4, 6);
      const day = date.substring(6, 8);
      return `${day}/${month}/${year}`;
    }
    return 'Fecha inválida'; // Devolver un valor predeterminado si la fecha no tiene el formato esperado
  }

  ngOnInit() {}
}
