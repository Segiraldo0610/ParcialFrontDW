# Bodegas-frontend

Este repositorio contiene una interfaz Angular para registrar bodegas y consultar el inventario. La tabla toma el nombre de la bodega de cada grupo de productos recibido desde la API.

## Ejecutar

Si usas Node.js 24, instala la versión 24.15.0 o posterior de esa serie. El proyecto se probó con Node.js 24.21.0 y npm 11.19.0. Inicia primero la [API de bodegas](https://github.com/Segiraldo0610/ParcialBackDW) en el puerto 8080. En otra terminal:

```powershell
git clone https://github.com/Segiraldo0610/ParcialFrontDW.git
cd ParcialFrontDW
npm ci
npm start
```

Abre <http://localhost:4200> y mantén ambas terminales abiertas. Si Angular ofrece otro puerto porque el 4200 está ocupado, libera el 4200 y vuelve a ejecutar `npm start`. La API permite las peticiones del navegador desde `http://localhost:4200`. Para compilar la interfaz usa `npm run build`.

## Comprobar el flujo

1. Al cargar la página aparecen tres productos. El monitor tiene 20 unidades en Bodega Norte y la impresora tiene 8 en Bodega Sur.
2. Escribe un nombre y una ubicación y pulsa **Registrar bodega**. El formulario muestra el nombre guardado al recibir la confirmación de la API.
3. Abre <http://localhost:8080/bodegas>. La bodega nueva aparece con `productos: []`. La tabla sigue mostrando tres filas porque cada fila representa un producto.

Los componentes están en `src/app/components`, los tipos de datos en `src/app/models` y las peticiones HTTP en `src/app/services/bodega.service.ts`.
