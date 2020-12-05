import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Repuesto } from './lista-repuestos/repuesto';

@Injectable({
  providedIn: 'root'
})
export class RepuestoCarritoService {

  private _carrito: Repuesto[]= [];
  carrito: BehaviorSubject<Repuesto[]> = new BehaviorSubject([]);
  constructor() { }
  
  agregarCarrito(repuesto: Repuesto) {
    let item: Repuesto =  this._carrito.find((v1) => v1.nombre==repuesto.nombre);
    if (!item) {
      this._carrito.push({ ... repuesto});
      
    }else{
      item.cantidad+= repuesto.cantidad;
    }
    this.carrito.next(this._carrito);
   
  }

}
