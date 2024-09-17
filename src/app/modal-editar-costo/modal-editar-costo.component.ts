import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonHeader, IonInput, IonButton, IonContent, IonLabel, IonItem, IonButtons, IonTitle, IonToolbar } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-editar-costo',
  templateUrl: './modal-editar-costo.component.html',
  styleUrls: ['./modal-editar-costo.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonTitle, IonButtons, IonButton, IonHeader, IonInput,IonContent,IonLabel,IonItem,FormsModule] // Importación para componentes independientes

})

export class ModalEditarCostoComponent implements OnInit { 
  @Input() destino: any;  
  nuevoCosto: number = 0;  

  

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    
  }

  actualizar() {
    // Actualiza el costo del destino y cierra el modal
    this.destino.costo = this.nuevoCosto;
    this.modalController.dismiss();
  }

  cerrar() {
    // Cierra el modal sin cambios
    this.modalController.dismiss();
  }
}
