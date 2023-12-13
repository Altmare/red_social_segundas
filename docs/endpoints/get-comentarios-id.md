# Endpoint: `GET / comentarios/{id}`

Permite obtener información detallada sobre un  comentario en específico mediante un id.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del  comentario que se desea recuperar.

## Ejemplo de Solicitud
```http
GET / comentario/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_comentario":1,
    "id_usuario": 1,
    "id_publicacion": 1,
    "contenido": "Chida publicacion",
    "fecha_comentario": "2000-2-2",
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el id_comentario"
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

#### Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un tema en específico.
- Para consultar más detalle sobre los variables relacionados con el tema consultar
