import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaRepuestosComponent } from './lista-repuestos/lista-repuestos.component';
import { FormsModule}  from '@angular/forms';
import { NfAutopartsContactoComponent } from './nf-autoparts-contacto/nf-autoparts-contacto.component';
import { NfAutopartsRepuestosComponent } from './nf-autoparts-repuestos/nf-autoparts-repuestos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputNumeroComponent } from './input-numero/input-numero.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ListaRepuestosComponent,
    NfAutopartsContactoComponent,
    NfAutopartsRepuestosComponent,
    CarritoComponent,
    InputNumeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
