import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NfAutopartsContactoComponent } from './nf-autoparts-contacto/nf-autoparts-contacto.component';
import { NfAutopartsRepuestosComponent } from './nf-autoparts-repuestos/nf-autoparts-repuestos.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "repuestos",
    pathMatch: "full"
  },
  {
    path:"repuestos",
    component: NfAutopartsRepuestosComponent
  },
  {
    path:"contacto",
    component: NfAutopartsContactoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
