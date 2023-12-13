# Endpoint: ``POST /comentarios`

Permite añadir  un nuevo  comentario en los registros.

## Parámetros de URL
- ninguno
  
## Ejemplo de Solicitud
```http
POST /comentarios
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
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
