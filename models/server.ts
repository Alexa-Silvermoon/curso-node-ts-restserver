
// import moduleName from 'express'; //npm i --save-dev @types/express    eso se pega en cmd para instalarlo como paquete npm
import express, { Application } from 'express';
// import router from '../routes/usuario';
// import * as userRoutes from '../routes/usuario';
import userRoutes from '../routes/usuario';

import cors from 'cors';
import db from '../db/connection';

class Server {

    private app: Application; //lo de private es puro typeado
    private port: string; //en este caso no importa definir el puerto como string
    private apiPaths = {

        usuarios: '/api/usuarios'

    }

    constructor(){

        this.app = express();
        this.port = process.env.PORT || '8000'; //si no puede leer el port entonces lo pone por defecto como 8000

        //BD
        this.dbConnection();

        // Metodos iniciales
        this.middlewares();

        // Definir mis rutas
        this.routes();

    }

    // Tarea conectar bases de datos
    // https://www.udemy.com/course/node-de-cero-a-experto/learn/lecture/24960268#questions

    async dbConnection(){

        try {

            await db.authenticate();
            console.log('Base de Datos Conectada');
            
        } catch (error: any) {

            throw new Error( error );
            
        }
    }

    middlewares(){

        // CORS
        this.app.use( cors() );


        // Lectura deñ body
        this.app.use( express.json() );


        // Carpeta Publica
        this.app.use( express.static('public') );

    }

    routes(){

        // this.app.use( this.apiPaths.usuarios, router );
        // this.app.use( this.apiPaths.usuarios, userRoutes.default );
        this.app.use( this.apiPaths.usuarios, userRoutes );
    }

    listen(){

        this.app.listen( this.port, () => {

            console.log('Servidor corriendo en el puerto ' + this.port );

        });
    }

}

export default Server;