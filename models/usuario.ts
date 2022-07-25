
import { DataTypes } from "sequelize";
import db from '../db/connection';

const Usuario = db.define('Usuario', { //esta es la tabla que esta en la base de datos table plus mysql

    nombre: {

        type: DataTypes.STRING

    },
    email: {

        type: DataTypes.STRING

    },
    estado: {

        type: DataTypes.BOOLEAN //en la bd es tinyint pero squelize me lo transforma de boolean a tinyint

    },

});

export default Usuario;