# Endpoint: `PUT /likes/{id}`

Permite borrar un registro e inserta uno nuevo en su lugar en likes.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del like que se desea recuperar.

## Ejemplo de Solicitud
```http
PUT /like/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_like": 1,
    "id_usuario": 1,
    "id_publicacion": 1,
    "fecha_like": "2000-02-02
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el like."
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
