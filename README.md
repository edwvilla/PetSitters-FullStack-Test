### PetSitters FullStack Test

## Instrucciones para correr el proyecto

Clonar el repositorio y desde la carpeta raíz ejecutar el siguiente comando:

`docker-compose up --build`

Esto levantará el proyecto en el puerto 3000 en el caso del frontend y en el puerto 9000 en el caso del backend.

En caso de error por alguno de los puertos, cambiarlos en el archivo `docker-compose.yml`, en la sección `ports` se cambia el puerto de la izquierda por el que se desee.

Ejemplo:
`- 3000:3000` por `- 3001:3000`

Las bases de datos se crean automáticamente al levantar el proyecto, las credenciales estan en el archivo `docker-compose.yml`

## Instrucciones para las rutas del backend

Postman
https://red-station-567237.postman.co/workspace/FOXFACTORY~9eb67397-1e75-4df8-8dd5-c24191a4f997/collection/9717007-d19eca84-3de9-4dc6-abde-d9fec590b158?action=share&creator=9717007

Asegurarse que las rutas manden el token en el header como `accessToken: token`
