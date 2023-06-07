import express, { Application } from 'express';
import routesLenguajes from '../routes/lenguaje.routes';
import dbConnection from '../database/connection';
import cors from 'cors';

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
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
        this.app.use(express.json());
       /* CORS */
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use('/api/lenguajes', routesLenguajes);
    }

    conectarDB() {
        dbConnection.connect((err) => {
            if (err) { throw err; }
            console.log('Base de datos online');
        });
    }

}

export default Server;