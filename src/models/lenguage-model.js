import mysql from "mysql2/promise"
import 'dotenv/config';

const dbConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

const connection = await mysql.createConnection(dbConfig);

export const getLenguages = async () => {
    const [rows] = await connection.query(
        `SELECT l.lenguaje_id, c.nombre AS categoria, l.categoria_id, l.nombre, l.descripcion, l.tiempo 
            FROM lenguajes l
            INNER JOIN categoria AS c ON l.categoria_id = c.categoria_id
        WHERE l.estatus != 0;
            `
    );
    return rows;
}

export const addLenguage = async (data) => {
    try {
        let lenguaje_id = 0;
        const msgError = "";
        const [result] = await connection.query(
            `INSERT INTO lenguajes(categoria_id, nombre, descripcion, tiempo, estatus, created_at)
                    VALUES(?, ?, ?, ?, 1, NOW())`,
            [data.categoria_id, data.nombre, data.descripcion, data.tiempo],
            (error, result) => {
                if (error) {
                    error = true
                    msgError = error;
                }
                lenguaje_id = result.insertId;
            }
        )
        return result.insertId;
    } catch (error) {
        return error;
    }
}

export const updLenguage = async (data) => {
    try {
        const [result] = await connection.query(
            `UPDATE lenguajes SET
                categoria_id = ?,
                nombre = ?,
                descripcion = ?,
                tiempo = ?,
                updated_at = NOW()
            WHERE lenguaje_id = ?;`,
            [data.categoria_id, data.nombre, data.descripcion, data.tiempo, data.lenguaje_id],
        )
        return result.affectedRows;
    } catch (error) {
        return error;
    }
}

export const delLenguage = async (data) => {
    try {
        const [result] = await connection.query(
            `UPDATE lenguajes SET
                estatus = 0,
                updated_at = NOW()
            WHERE lenguaje_id = ?;`,
            [data.lenguaje_id],

        )
        return result.affectedRows;
    } catch (error) {
        return error;
    }
}

export const getLabels = async () => {
    const [etiquetas] = await connection.query(
        `SELECT etiqueta_id, nombre, estatus FROM etiquetas;`
    );
    return etiquetas;
}