"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({ usuarios });
    // res.json({
    //     msg: 'getUsuarios'
    // });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json({ usuario });
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
    // res.json({
    //     msg: 'getUsuario',
    //     id
    // });
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (body.nombre === '') {
            return res.status(400).json({
                msg: 'Por favor escriba un nombre'
            });
        }
        if (body.email === '') {
            return res.status(400).json({
                msg: 'Por favor escriba un email'
            });
        }
        if (existeEmail) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el email ${body.email}`
            });
        }
        // const usuario = new Usuario( body );
        const usuario = yield usuario_1.default.create(body);
        // const usuario = Usuario.build( body );
        yield usuario.save();
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error en postUsuario, hable con el administrador'
        });
    }
    // res.json({
    //     msg: 'postUsuario',
    //     body
    // });
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (body.nombre === '') {
            return res.status(400).json({
                msg: 'Por favor escriba un nombre'
            });
        }
        if (body.email === '') {
            return res.status(400).json({
                msg: 'Por favor escriba un email'
            });
        }
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
            });
        }
        yield usuario.update(body);
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'error en postUsuario, hable con el administrador'
        });
    }
    // res.json({
    //     msg: 'putUsuario',
    //     id,
    //     body
    // });
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
    // Eliminacion fisica de la bd - no recomendable ya que la bd pierde integridad
    // await usuario.destroy();
    // res.json( usuario );
    yield usuario.update({ estado: false }); //pone el estado en 0 en la bd
    res.json(usuario);
    // https://www.udemy.com/course/node-de-cero-a-experto/learn/lecture/24960744#questions
    // res.json({
    //     msg: 'deleteUsuario',
    //     id
    // });
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map