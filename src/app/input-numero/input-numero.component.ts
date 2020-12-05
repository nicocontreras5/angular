import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-numero',
  templateUrl: './input-numero.component.html',
  styleUrls: ['./input-numero.component.scss']
})
export class InputNumeroComponent implements OnInit {

  constructor() { }
  @Input()
  cantidad : number; 
  @Input()
  max : number; 

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  
  @Output()
  maxRechazado: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }


  aumentarCantidad() :void{
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }else{
        this.maxRechazado.emit("se alcanzo el maximo");
    }
  
  }

  
  disminuirCantidad() :void{
    if (this.cantidad >0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

   
  cambiarCantidad(event) :void{
    
    if ((event.key>=0)&&(event.key<=9)) {
      if (event.target.value<= this.max) {
          this.cantidad = parseInt(event.target.value);
        }else{
          this.cantidad = this.max;
          this.maxRechazado.emit("se alcanzo el maximo");
        }
        this.cantidadChange.emit(this.cantidad);
    }else if (event.target.value=="") {
      this.cantidad =0;
  
    }
  }


}
