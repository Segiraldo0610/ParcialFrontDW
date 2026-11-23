import { Producto } from './producto.model';

export interface RegistroBodega {
  nombre: string;
  ubicacion: string;
}

export interface Bodega extends RegistroBodega {
  id: number;
  productos: Producto[];
}
