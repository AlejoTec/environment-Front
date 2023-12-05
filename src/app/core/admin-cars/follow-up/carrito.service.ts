import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../products-engines-tools/product.card';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
 
  private cartProducts: Car[] = [];
  private total = 0;

  private _car: BehaviorSubject<Car[]>;
  private _total: BehaviorSubject<number>;

  constructor() {
    this._car =new BehaviorSubject<Car[]>([]);
    this._total = new BehaviorSubject<number>(this.total);
   }

  get products (){
    return this._car.asObservable();
  }

  get totalAmount() {
    return this._total.asObservable();
  }

  addNewProduct(car:Car){
    this.cartProducts.push(car)
    this._car.next(this.cartProducts)
    this.updateTotal(); 
  }

  clearCart() {
    this.cartProducts = []; 
    this._car.next(this.cartProducts);
    this.updateTotal(); 
  }  

  updateTotal() {
    this.total = this.cartProducts.reduce((sum, product) => sum + product.precio, 0);
    this._total.next(this.total);
  }

  removeProduct(product: Car) {
    this.cartProducts = this.cartProducts.filter(p => p !== product);
    this._car.next(this.cartProducts);
    this.updateTotal(); 
  }
}
