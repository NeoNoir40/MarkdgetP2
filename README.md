# MarkdgetP2

Esta es una guia para instalar los paquetes necesarios para el correcto funcionamiento del proyecto

--BACKEND--

Tenemos que asegurarnos de estar dentro de la carpeta backend , podremos acceder a esta realizando un CD /Backend.

Despues de asegurarnos de estar en esta carpeta, realizaremos la instalacion de los paquetes, a continuacion se dejara una lista de los paquetes que nesesitan ser instalados:

npm install 

npm install express mysql2 cors

npm install cookiparser

npm install bcrypt

npm install jsonwebtoken

npm install zod

npm install react-router-dom

npm install nodemon

npm install axios

// a continuacion se modifico la siguiente linea del package.json de la carpeta backend , esto hace que al realizar un cambio dentro del nodejs, se actualize automaticamente, el comando para correr el nodejs es "npm run dev".

{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  ----  "dev": "nodemon src/index.js" ----- Esta es la linea que se modifico
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.4.0",
    "bcrypt": "^5.1.0",
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.1",
    "mysql": "^2.18.1",
    "mysql2": "^3.5.1",
    "zod": "^3.21.4"
  }
}


//



Ahora para la carpeta de frontend tenemos que instalar las siguientes librerias:

npm install 

npm install tailwindcss

npm install boxicons --save 

npm install react-router-dom

npm install axios

npm install react-hook-form

npm i js-cookie

Listo seria todo por el momento.
