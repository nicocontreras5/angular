import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Repuesto } from '../lista-repuestos/repuesto';
import { RepuestoCarritoService } from '../repuesto-carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  lista_carrito$: Observable<Repuesto[]>;

  constructor(private carrito: RepuestoCarritoService) { 
    this.lista_carrito$ = carrito.carrito.asObservable();
  }

  ngOnInit(): void {
  }

}
