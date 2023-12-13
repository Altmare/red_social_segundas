# Endpoint: `PUT /usuarios/{id}`

Permite borrar un registro e inserta uno nuevo en su lugar en id_usuario.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea recuperar.

## Ejemplo de Solicitud
```http
PUT /usuario/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_usuario": 1,
    "nombre_usuario": "María",    
    "correo_electronico":"maria@gmail.com",
    "contraseña": "123",
    "fecha_registro": "2000-2-2"
);
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el tema."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un tema en específico.
