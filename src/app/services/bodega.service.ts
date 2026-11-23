import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bodega, RegistroBodega } from '../models/bodega.model';

@Injectable({ providedIn: 'root' })
export class BodegaService {
  private readonly http = inject(HttpClient);
  private readonly url = 'http://localhost:8080/bodegas';

  consultar() {
    return this.http.get<Bodega[]>(this.url);
  }

  registrar(datos: RegistroBodega) {
    return this.http.post<Bodega>(this.url, datos);
  }
}
