import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export async function getUsers() {
    const [users] = await pool.query(`
    SELECT *
    FROM user
    `)

    return users;
}

export async function getUser(id) {
    const [user] = await pool.query(`
    SELECT *
    FROM user
    WHERE id = ?
    `, [id])

    return user[0];
}

export async function createUser(first_name, last_name, email) {
    const [result] = await pool.query(`
    INSERT INTO user(first_name, last_name, email)
    VALUES(?, ? ,?)
    `, [first_name, last_name, email])

    const id = result.insertId;
    return getUser(id);
}