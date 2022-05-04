# FAVS API with JS

Favs API tiene como objetivo brindar una mejor manera de organizar tus cosas favoritas: música, ropa, cursos, etc., todo en un solo lugar.
# Requisitos

Para este proyecto necesitas tener instalado lo siguiente:

- Node.js
- MongoDB 
- Express
- Mongoose
- JWT
- bcrypt
- cors
- morgan
- dotenv


## Configuración

Para configurar este proyecto de forma local sigue estas instrucciones:

1. Clona el proyecto de Git:
   ```
   $ git clone
   ```
2. Instala las dependencias con NPM:
   ```
   $ npm install
   ```
3. Crea  un archivo `.env` con las credenciales:
   ```
   DB_URI=mongodb+srv://...
   PORT=3001
   SECRET_TOKEN_KEY=...
   ```
4. Ejecuta el proyecto con el siguiente comando:
   ```
   $ npm run dev:start
   ```

Para probar la aplicación debes ingresar a un cliente HTTP (por ejemplo POSTMAN) 

**Almacenamiento:**  Necesitamos una implementación de base de datos MongoDB.

**Nota:** A continuacion se presenta una tabla con los endpoints que se pueden llamar:



| Route | HTTP Verb | Route Middleware |Description |
| --- | --- | --- |---|
|/api/favs| GET |isAuthenticated() |Get all list of favorites |
| /api/favs| POST | isAuthenticated() |Creates a new list of favorites|
|/api/favs/:id | GET | isAuthenticated() |Get a single list of favorites |
| /api/favs/:id| 	DELETE | isAuthenticated() |Deletes a list of favorites|
| /auth/local/login| POST | isAuthenticated()|Login user by email/password |

Si necesitas crear un usuario o iniciar sesión, aquí tenemos algunos ejemplos.

| Usuario de autenticación |/auth/local/login |
| --- | --- |

Request Body:

```
json
{
"email": "kz@mz.com",
"password": "12345678"
}
```

Response:
```
json
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFjNjM1MTljZjlkNTQ5YjA3YWU2NTEiLCJpYXQiOjE2MjE5MTMyNjIsImV4cCI6MTYyMTk5OTY2Mn0.WkptwtzkfxNu5sQ28idbt4bJ7RDbXvVNlZXF0Z0ht-0"
}
```






Para detener el script ejecuta `Ctr+C`:

```
[nodemon] starting `node index.js`
MONGODB connected
```

Para ejecutar las pruebas automatizadas utiliza este comando:

```
$ npm test
```

Las pruebas del sistema se ejecutan con un comando a parte porque son lentas:

```
$ npm run test:system
```

# Tecnologías

Este proyecto está construído con las siguientes tecnologías:

- [Node.js](https://nodejs.org/en/) Backend.
- [Express](https://expressjs.com/) es una librería de [Node.js](https://nodejs.org/en/) para crear el API.
- [MongoDB](https://www.mongodb.com/) es la base de datos principal.
- [JWT (JSON Web Tokens)](https://jwt.io/) para almacenar información del usuario.
- [Jest](https://jestjs.io/) para las pruebas automatizadas.





