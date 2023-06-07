"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lenguaje_routes_1 = __importDefault(require("../routes/lenguaje.routes"));
const connection_1 = __importDefault(require("../database/connection"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3500';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto => ${this.port}`);
        });
    }
    middlewares() {
        /* Para que el servidor entienda los datos que vienen del formulario */
        this.app.use(express_1.default.json());
        /* CORS */
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/api/lenguajes', lenguaje_routes_1.default);
    }
    conectarDB() {
        connection_1.default.connect((err) => {
            if (err) {
                throw err;
            }
            console.log('Base de datos online');
        });
    }
}
exports.default = Server;
