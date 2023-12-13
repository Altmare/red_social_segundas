#### Endpoint: `PATCH /amigos/{id}`

Actualiza un registro en el id amigos dado.

#### Parámetros de URL
- `{id}` (obligatorio): Identificador único del amigo que se desea recuperar.

#### Ejemplo de Solicitud
```http
PATCH /amigo/1
```

#### Respuesta Exitosa (Código 200 OK)
```json
{
    "id_amistad":1,
    "id_usuario1":1,
    "id_usuario2":1,
    "fecha_amistad":"2000-2-2"
}
```

#### Respuestas de Errores Posibles
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
- Para consultar más detalle sobre los variables relacionados con el tema consultar
