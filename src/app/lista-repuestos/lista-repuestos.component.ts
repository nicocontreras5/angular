import { Component, OnInit } from '@angular/core';
import { RepuestoCarritoService } from '../repuesto-carrito.service';
import { Repuesto } from './repuesto';

@Component({
  selector: 'app-lista-repuestos',
  templateUrl: './lista-repuestos.component.html',
  styleUrls: ['./lista-repuestos.component.scss']
})
export class ListaRepuestosComponent implements OnInit {

  repuestos: Repuesto[] = [
    {
      imagen: "assets/imagenes/aros.jpg",
      nombre: "Chevrolet nova serie 2",
      tipo : "Aros",
      precio: 5000,
      stock: 5,
      oferta: true,
      cantidad: 0,
    },
    {
      imagen: "assets/imagenes/pistones.jpg",
      nombre: "Ford Falcon",
      tipo : "Pistones",
      precio: 10000,
      stock: 0,
      oferta: false,
      cantidad: 0,
    },
    {
      imagen: "assets/imagenes/escapes.jpg",
      nombre: "Peugeot 206",
      tipo : "Escapes",
      precio: 1000,
      stock: 2,
      oferta: false,
      cantidad: 0,
    }
  
  

  ]


  constructor(private carrito: RepuestoCarritoService) {
    
   }

  ngOnInit(): void {
  }

  agregarCarrito(repuesto: Repuesto): void{
    if (repuesto.cantidad != 0) {
      
      this.carrito.agregarCarrito(repuesto);
      repuesto.stock -= repuesto.cantidad;
      repuesto.cantidad= 0;
    }
  }

  maxRechazado(m: string){
    alert(m);
  }
  

}
