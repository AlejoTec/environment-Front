import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../products-engines-tools/product.card';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-follow-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.scss']
  
})
export class FollowUpComponent {
  car: Car[] = [];

  constructor(private carrritoService:CarritoService){}

  ngOnInit(){
    this.carrritoService.products.subscribe(products =>{
      this.car = products;
    });
  }
  realizarCompra() {
    // Limpiar el carrito (puedes implementar el método clearCart en tu servicio)
    this.carrritoService.clearCart();
    alert('¡Compra realizada! Gracias por tu compra.');
  }
  

  removeProduct(product: Car) {
    this.carrritoService.removeProduct(product);
  }
}
