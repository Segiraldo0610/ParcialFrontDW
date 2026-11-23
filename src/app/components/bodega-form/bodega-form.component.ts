import { Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BodegaService } from '../../services/bodega.service';

@Component({
  selector: 'app-bodega-form',
  imports: [ReactiveFormsModule],
  templateUrl: './bodega-form.component.html'
})
export class BodegaFormComponent {
  private readonly servicio = inject(BodegaService);
  readonly registrada = output<void>();
  readonly guardando = signal(false);
  readonly mensaje = signal('');
  readonly form = inject(FormBuilder).nonNullable.group({
    nombre: ['', [Validators.required, Validators.pattern(/\S/)]],
    ubicacion: ['', [Validators.required, Validators.pattern(/\S/)]]
  });

  guardar() {
    if (this.guardando()) return;
    if (this.form.invalid) {
      this.mensaje.set('Escribe el nombre y la ubicación de la bodega.');
      return;
    }
    this.guardando.set(true);
    this.mensaje.set('');
    this.servicio.registrar(this.form.getRawValue()).subscribe({
      next: bodega => {
        this.form.reset();
        this.guardando.set(false);
        this.mensaje.set('Bodega registrada: ' + bodega.nombre);
        this.registrada.emit();
      },
      error: () => {
        this.guardando.set(false);
        this.mensaje.set('No se pudo registrar la bodega. Revisa la conexión con el servidor.');
      }
    });
  }
}
