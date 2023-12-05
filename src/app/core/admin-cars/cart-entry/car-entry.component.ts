import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-entry.component.html',
  styleUrls: ['./car-entry.component.scss']
})
export class CarEntryComponent {
  submitForm() {
    this.clearForm();
    this.showAlert();
  }
  clearForm() {
    
  }
  showAlert() {
    alert('Datos tomados correctamente.');
  }
  submitPaymentInfoForm() {
    // Lógica para manejar el envío del formulario de información de pago
    // Puedes procesar la información aquí
    alert('Datos de la tarjeta guardados')
  }
}
