# bodegas-frontend

Interfaz Angular para registrar bodegas y consultar el inventario. La tabla toma el nombre de la bodega de cada grupo de productos recibido desde la API.

## Ejecutar

Requiere Node.js 24.21 y npm. Inicia primero la [API de bodegas](https://github.com/Segiraldo0610/ParcialBackDW) en el puerto 8080. En otra terminal:

```powershell
git clone https://github.com/Segiraldo0610/ParcialFrontDW.git
cd ParcialFrontDW
npm ci
npm start
```

Abre <http://localhost:4200> y mantén ambas terminales abiertas. Para compilar la interfaz usa `npm run build`.

## Comprobar el flujo

1. Al cargar la página aparecen tres productos. El monitor tiene 20 unidades en Bodega Norte y la impresora tiene 8 en Bodega Sur.
2. Escribe un nombre y una ubicación y pulsa **Registrar bodega**. El formulario muestra el nombre guardado al recibir la confirmación de la API.
3. Abre <http://localhost:8080/bodegas>. La bodega nueva aparece con `productos: []`. La tabla sigue mostrando tres filas porque cada fila representa un producto.

Los componentes están en `src/app/components`, los tipos de datos en `src/app/models` y las peticiones HTTP en `src/app/services/bodega.service.ts`.
