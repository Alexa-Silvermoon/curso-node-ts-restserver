"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('Curso-Node-TS-Restserver', 'root', '', {
    host: 'localhost',
    dialect: "mysql",
    // logging: false,
});
exports.default = db;
// https://www.udemy.com/course/node-de-cero-a-experto/learn/lecture/24960368#questions
//# sourceMappingURL=connection.js.map