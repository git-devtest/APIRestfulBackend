import mysql from 'mysql';
import keys from '../keys';

const dbConnection = mysql.createConnection(keys);

export default dbConnection;
