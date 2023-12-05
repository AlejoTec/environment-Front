import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from './product.card';
import { CarritoService } from '../follow-up/carrito.service';



@Component({
  selector: 'app-products-engines-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-engines-tools.component.html',
  styleUrls: ['./products-engines-tools.component.scss'],
})

export class ProductsEnginesToolsComponent{
  car: Car[]=[
    {nombre: "Aceite", precio: 70000, imagen:'aceite.jpg', id:1},
    {nombre: "Pinzas de Bateria", precio: 30000, imagen:'pinzas.jpeg', id:2},
    {nombre: "Juego de Herramientas", precio: 250000, imagen:'juego.jpg', id:3},
    {nombre: "Shampoo para autos", precio: 40000, imagen:'shampoo.jpg', id:4},
    {nombre: "Aspiradora para auto", precio: 80000, imagen:'aspiradora.jpg', id:5},
    {nombre: "Cera en Spray", precio: 35000, imagen:'spray.jpg', id:6},
    {nombre: "Llanta", precio: 420000, imagen:'llanta.jpg', id:7},
    {nombre: "Gato de Tijera", precio: 387000, imagen:'gato.jpg', id:8},
]
  constructor(
    private carritoService: CarritoService
  ){}

  onClick(car:Car){
    console.log('Onclick',car)
    this.carritoService.addNewProduct(car);
  }

}
