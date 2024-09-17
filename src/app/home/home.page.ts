import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar pipes como currency
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Para permitir el uso de elementos personalizados como ion-thumbnail

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class HomePage {
  // Array para almacenar 
  destinos: Array<{ 
    nombre: string, 
    pais: string, 
    costo: number, 
    foto: string | undefined 
  }> = [
    { nombre: 'París', pais: 'Francia', costo: 500, foto: 'assets/paris.jpg' },
    { nombre: 'Tokio', pais: 'Japón', costo: 800, foto: 'assets/tokio.jpeg' }
  ];
  
  constructor() {}

  // para actualizar el costo 
  actualizarCosto(index: number, nuevoCosto: number) {
    this.destinos[index].costo = nuevoCosto;
  }

  //  para eliminar destino
  eliminarDestino(index: number) {
    this.destinos.splice(index, 1); // Elimina el destino de la lista
  }

  editarCosto(index: number) {
    // para editar el costo del destino
    console.log('Editar costo para el destino en el índice', index);
  }

  async capturarFoto(index: number) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
  
    this.destinos[index].foto = image.webPath;
  }
}
