const express = require('express');
const expressMyconnection = require('express-myconnection');
const morgan = require('morgan');
const mysql = require('mysql');
const app = express();

/* Importing routes */
const programacionRoutes = require('./src/routes/programacion');

/* Settings */
app.set('port', process.env.PORT || 3000);

/* Middlewares */
app.use(morgan('dev'));
app.use(expressMyconnection(mysql, {
        host: 'localhost',
        user: 'root',
        password: 'castorTt9Ue3',
        port: 3306,
        database: 'prueba'
    }, 'single'));
app.use(express.urlencoded({extended: false}));

/* Routes */
app.use('/', programacionRoutes);

/* Starting the server */
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});