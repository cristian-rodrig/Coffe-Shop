# App Full stack coffe shop Angular-Node

# CoffeMachine

Una pequeña tienda virtual hecha en Angular (con backend en Nodejs). 

## Funcionalidad principal

Se trata básicamente de una calculadora de pedidos de café. Se da una serie de productos bases y una serie de productos extra.
No se puede completar el pedido si no se tiene seleccionado un producto principal.

El modal calcula el total en base a lo elegido.

Una ves se confirma la compra, se hace un reload de todos los componentes para volver a un estado inicial y poder realizar
el cálculo de un nuevo pedido.

## Estructura del proyecto

- Se utilizó un componente llamado layout y otro header. La razón de esto es que muchos proyectos a gran escala necesitan
un layout en común para poder renderizar los componentes de forma individual, sin tener que estar repitiendo código.
No era necesario el uso de un layout y header principal, pero así se demuestra el conocimiento que se tiene con respecto
a esta estructura que suele ser bastante usada, además se muestra el conocimiento del lazyloading.

- El layout renderiza un modulo llamado shop (el cual tiene su propio path '/shop'). Este modulo es quien se encarga de manejar
las selecciones del usuario. Además, este módulo es padre de un componente llamado "coffee-card", el cual se encarga de renderizar
de forma individual cada producto, sea principal, o extra. De esta forma se mantiene una separación de código más notable.

- Se utilizaron las propiedades intput y output del core de angular para dejar notorio el conocimiento en cuanto a la interacción
de componentes.

- El módulo shop se encarga de llevar las selecciones del usuario, este es el módulo que realiza las peticiones http al backend (el backend tiene habilitada la opción cors para poder permitir las peticiones desde el puerto 4200). Además, la lista de lo elegido es guardado en el localstorage, para poder así mostrarla en el carrito.

- Se separó la utilización de los servicios. Hay un servicio para hacer peticiones http y otro para manipular el localstorage.


## Módulos de terceros

Se utilizaron módulos de 3eros para dejar en claro el conocimiento que se tiene al instalar nuevos paquetes a través del gestor de archivos de node. estos fueron:

- localforage
- sweetalert2

Estos paquetes ya se encuentran representados en el package.json, por lo tanto al realizar npm install deberian instalarse todos.
