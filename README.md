# THE PHONE CAVE

Autor: Jordi Boronat

La app es un CRUD que permite ver todos los teléfonos, editarlos, eliminarlos y añadir nuevos. He trabajado sobretodo con la maquetación para que se quede un resultado lo más estético posible. 

<img src="https://res.cloudinary.com/jordi-projects/image/upload/v1610908988/fotos-webuild/Captura_de_pantalla_2021-01-17_a_las_19.38.57_d5e8rz.png" alt="Overview">

<hr></hr>
<img src="https://res.cloudinary.com/jordi-projects/image/upload/v1610908989/fotos-webuild/Captura_de_pantalla_2021-01-17_a_las_19.39.11_ekltya.png" alt="Overview">
<hr></hr>

<img src="https://res.cloudinary.com/jordi-projects/image/upload/v1610908981/fotos-webuild/phone-detail_nfg4al.png" alt="Overview">
<hr></hr>

[Video Demo Full-Screen](https://www.youtube.com/watch?v=iPaZZSIoEUs&ab_channel=JordiBoronatAr%C3%A9valo)
<br>
[Video Demo Small-Screen Responsive](https://www.youtube.com/watch?v=0XEqtWAwMJc&ab_channel=JordiBoronatAr%C3%A9valo)


### Endpoints Servidor

A pesar que en las instrucciones se especificaba tener un sólo un endpoint, he implementado más para liberar al Cliente de hacer procesos más costosos y que la web tenga procesos más ligeros.

| Ruta        | Método           | Acción  |
  | ------------- | ------------- | ------------- |
  | `/telefonos`  | GET | Acceso a todos los teléfonos |
  | `/new` | POST | Añadir nuevo teléfono |
  | `/telefonos/:id` | GET | Detalles de un teléfono  |
  | `/edit/:id` | POST | Editar teléfono  |
  | `/delete/:id` | POST | Eliminar teléfono  |
  | `/files/upload` | POST | Subir archivo a Cloudinary  |
 
 ### Endpoints Cliente


| Ruta        |  Acción  |
  | ------------- | ------------- | 
  | `/`  | Página de inicio |
  | `/telefonos` | Listado teléfonos |
  | `/telefonos/:id` | Detalles de un teléfono  |
  | `/editar/:id` | Editar teléfono  |
  | `/new` | Añadir nuevo teléfono  |


  ### Intrucciones

  - Ejecutar Servidor con "npm run dev". Se ejecuta en el puerto 5000.
  - Ejecutar Cliente con "npm start". Se ejecuta en http://localhost3000.




### Tecnologías usadas
- HTML5 
- CSS3
- JavaScript
  - React
  - AJAX
  - NodeJs
  - MondoDB
  - Mongoose
  - Cloudinary
  - Multer
  - React Bootstrap
  - Cors 
