import { Component, inject, OnInit, signal } from '@angular/core';
import { BodegaService } from '../../services/bodega.service';
import { Bodega } from '../../models/bodega.model';

@Component({
  selector: 'app-producto-tabla',
  templateUrl: './producto-tabla.component.html'
})
export class ProductoTablaComponent implements OnInit {
  private readonly servicio = inject(BodegaService);
  readonly bodegas = signal<Bodega[]>([]);
  readonly aviso = signal('Cargando inventario…');
  readonly precio = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 2 });

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.servicio.consultar().subscribe({
      next: bodegas => {
        this.bodegas.set(bodegas);
        this.aviso.set(bodegas.some(b => b.productos.length > 0) ? '' : 'Todavía no hay productos.');
      },
      error: () => this.aviso.set('No se pudo consultar el inventario.')
    });
  }
}
