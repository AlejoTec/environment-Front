import { Component } from '@angular/core';

@Component({
	selector: 'app-wheels-advertising',
	templateUrl: './wheels-advertising.component.html',
	styleUrls: ['./wheels-advertising.component.scss'],
	standalone: true
})
export class WheelsAdvertisingComponent {
	submitCustomerServiceForm() {
		console.log('Formulario de atención al cliente enviado');
	  }
	  submitForm() {
		this.clearForm();
		this.showAlert();
	  }
	  clearForm() {
		
	  }
	  showAlert() {
		alert('Gracias por su aporte');
	  }

}
