import { Request, Response } from 'express';
import dbConnection from '../database/connection';

/* Obtener todos los lenguajes */
export const getLenguajes = (req: Request, res: Response) => {
    const query = 'SELECT * FROM programacion';
    dbConnection.query(query, (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Error en la base de datos'
            });
        }

        res.json(rows);
    });
}

/* Obtener un lenguaje */
export const getLenguajeById = (req: Request, res: Response) => {
    const query = 'SELECT * FROM programacion WHERE id = ?';
    const { id } = req.params;
    dbConnection.query(query, [id], (err, row) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                msg: 'Error en la base de datos'
            });
        }
        res.json(row[0]);
    });
}

/* Eliminar un lenguaje */
export const deleteLenguaje = (req: Request, res: Response) => {
    const query = 'DELETE FROM programacion WHERE id = ?';
    const { id } = req.params;
    dbConnection.query(query, [id], (err) => {
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
}

/* Insertar un lenguaje */
export const postLenguaje = (req: Request, res: Response) => {
    const query = 'INSERT INTO programacion SET ?';
    const { body } = req;
    dbConnection.query(query, [body], (err) => {
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
}

/* Actualizar un lenguaje */
export const putLenguaje = (req: Request, res: Response) => {
    const query = 'UPDATE programacion SET ? WHERE id = ?';
    const { id } = req.params;
    const { body } = req;
    dbConnection.query(query, [body, id], (err) => {
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
}