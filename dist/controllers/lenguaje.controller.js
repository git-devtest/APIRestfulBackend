"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putLenguaje = exports.postLenguaje = exports.deleteLenguaje = exports.getLenguajeById = exports.getLenguajes = void 0;
const connection_1 = __importDefault(require("../database/connection"));
/* Obtener todos los lenguajes */
const getLenguajes = (req, res) => {
    const query = 'SELECT * FROM programacion';
    connection_1.default.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Error en la base de datos'
            });
        }
        res.json(rows);
    });
};
exports.getLenguajes = getLenguajes;
/* Obtener un lenguaje */
const getLenguajeById = (req, res) => {
    const query = 'SELECT * FROM programacion WHERE id = ?';
    const { id } = req.params;
    connection_1.default.query(query, [id], (err, row) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Error en la base de datos'
            });
        }
        res.json(row[0]);
    });
};
exports.getLenguajeById = getLenguajeById;
/* Eliminar un lenguaje */
const deleteLenguaje = (req, res) => {
    const query = 'DELETE FROM programacion WHERE id = ?';
    const { id } = req.params;
    connection_1.default.query(query, [id], (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Error en la base de datos'
            });
        }
        res.json({
            msg: `Lenguaje eliminado con éxito, id: ${id}`,
        });
    });
};
exports.deleteLenguaje = deleteLenguaje;
/* Insertar un lenguaje */
const postLenguaje = (req, res) => {
    const query = 'INSERT INTO programacion SET ?';
    const { body } = req;
    connection_1.default.query(query, [body], (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Error en la base de datos'
            });
        }
        console.log(req.body);
        res.json({
            msg: `Lenguaje agregado con éxito`,
            body: body
        });
    });
};
exports.postLenguaje = postLenguaje;
/* Actualizar un lenguaje */
const putLenguaje = (req, res) => {
    const query = 'UPDATE programacion SET ? WHERE id = ?';
    const { id } = req.params;
    const { body } = req;
    connection_1.default.query(query, [body, id], (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Error en la base de datos'
            });
        }
        res.json({
            msg: `Lenguaje actualizado con éxito. Id: ${id}`,
            body: body
        });
    });
};
exports.putLenguaje = putLenguaje;
