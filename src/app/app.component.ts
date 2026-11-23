import { Component } from '@angular/core';
import { BodegaFormComponent } from './components/bodega-form/bodega-form.component';
import { ProductoTablaComponent } from './components/producto-tabla/producto-tabla.component';

@Component({
  selector: 'app-root',
  imports: [BodegaFormComponent, ProductoTablaComponent],
  template: `
    <header><h1>Bodegas e inventario</h1></header>
    <main>
      <app-bodega-form (registrada)="tabla.consultar()" />
      <app-producto-tabla #tabla />
    </main>`
})
export class AppComponent {}
