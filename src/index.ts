import Server from "./models/server";

/* CONFIGURACIÓN DE DOTENV */
import dotenv from 'dotenv';
dotenv.config();

const server = new Server();

server.listen();