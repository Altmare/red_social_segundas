# API RESTful con Node.js

Se realiza un proyecto de la red social para adultos mayores donde se desarrollo de APIs utilizando Node.js, aquí se implementan contenedores en Docker.

## Tabla de contenido

- [API RESTful con Node.js](#api-restful-con-nodejs)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

1. Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

2. Asegúrate de tener instalado dbeaver

- [DBeaver](https://dbeaver.io/download/)

3. Asegúrate de tener instalado postman 
 - [Postman](https://www.postman.com/downloads/)
   


## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/Altmare/red_social_segundas
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd red_social_main
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3100`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)