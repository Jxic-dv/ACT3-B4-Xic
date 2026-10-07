# Carrito de Ventas con Observables y Pipes en Angular

Aplicación web desarrollada en Angular que implementa un flujo completo de carrito de compras utilizando **Observables** (`BehaviorSubject`) para la gestión de estado compartido de forma reactiva y **Pipes personalizados** para la transformación y cálculo dinámico de datos.

---

## Documentación del Flujo y Arquitectura

Esta implementación satisface los requerimientos técnicos y evaluativos establecidos para la solución:

### 1. Arquitectura y Comunicación entre Componentes
* **Servicio Centralizado:** La comunicación entre el catálogo de productos (`ProductListComponent`) y el resumen del carrito (`CartSummaryComponent`) se realiza mediante la inyección del servicio central `CartService`.
* **Desacoplamiento:** El flujo permite agregar, actualizar y visualizar productos desde distintos puntos de la interfaz de manera desacoplada, manteniendo la lógica de negocio centralizada en el servicio.

### 2. Manejo de Estado con Observables
* **Fuente Única de Verdad:** Se emplea un `BehaviorSubject` dentro del `CartService`, el cual actúa como la única fuente de verdad y retiene el estado actual de los artículos del carrito.
* **Programación Reactiva:** El componente de resumen (`CartSummaryComponent`) se suscribe automáticamente a este flujo mediante el pipe `async` en la plantilla HTML, propagando instantáneamente cambios como la modificación de cantidades o la eliminación de elementos.

### 3. Propósito de los Pipes Personalizados
Se crearon dos pipes personalizados para aislar la lógica matemática fuera de los componentes y de las plantillas HTML:
* **`SubtotalPipe` (`subtotal`):** Recibe el precio unitario y la cantidad de un producto para calcular el subtotal individual de cada fila.
* **`CartTotalPipe` (`cartTotal`):** Procesa el listado completo de items del carrito (`CartItem[]`) y calcula la suma total acumulada.
* **Beneficio:** Limpia el código de la vista y garantiza que los subtotales y el total general se recalculen dinámicamente cada vez que el estado del carrito cambia.

---

## Estructura del Proyecto

```text
src/app/
├── components/
│   ├── product-list/       # Muestra el catálogo de productos disponibles
│   └── cart-summary/       # Muestra el resumen del carrito y totales
├── models/
│   ├── product.ts          # Interfaz del modelo de Producto
│   └── cart-item.ts        # Interfaz del ítem del carrito (producto + cantidad)
├── pipes/
│   ├── subtotal.pipe.ts    # Pipe para cálculo de subtotal por producto
│   └── cart-total.pipe.ts  # Pipe para cálculo del total general del carrito
└── services/
    └── cart.service.ts     # Servicio reactivo de gestión del estado del carrito
