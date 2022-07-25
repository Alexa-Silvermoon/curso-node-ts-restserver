import { Sequelize } from "sequelize";

const db = new Sequelize('Curso-Node-TS-Restserver', 'root', '', { //usuario y contraseña de la bd, es mi caso Table Plus mysql

    host: 'localhost',
    dialect: "mysql",
    // logging: false,

});

export default db;

// https://www.udemy.com/course/node-de-cero-a-experto/learn/lecture/24960368#questions