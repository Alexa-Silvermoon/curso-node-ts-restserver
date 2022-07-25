
import dotenv from 'dotenv';
import Server from './models/server';

dotenv.config();

// export const nombre = 'Alexander';
// console.log( nombre );

const server = new Server();

server.listen();

// recordar que para compilar de ts a js debemos escribir el comando tsc ya sea en la terminal de VS Code o en el cmd

// para correr la app, escribir en el cmd:     node dist/app.js  o bien nodemon dist/app.js
// tener en cuenta que se debe tener instalado nodemon de manera global, para ello ir al cmd como administrador y escribir el comando   npm install -g nodemon
// o bien el comando npm install -g nodemon --unsafe-perm

/*
1- compilar todo, escribimos en el cmd o en consola el comando   tsc

-----------------------------------------------------------------------

2- para que typescript entre en modo observador y notifique cambios, escribir el comando    tsc --watch
*/

//https://www.udemy.com/course/node-de-cero-a-experto/learn/lecture/24959022#questions

// instalaciones neceasrias para Table PLus mysql
// npm install --save sequelize
// npm install --save mysql2