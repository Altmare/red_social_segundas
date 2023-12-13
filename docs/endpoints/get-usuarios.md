# Endpoint: ``GET /usuarios`

Permite obtener información sobre todos los usuarios registrados.

## Parámetros de URL
- ninguno
  
## Ejemplo de Solicitud
```http
GET /usuarios
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