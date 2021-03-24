import express from 'express';
import { createConnection, getConnection, getConnectionManager } from 'typeorm';
import { router } from '../routes/routes';
import "reflect-metadata";

const app = express();

createConnection().then(connection => {
    
    app.use(express.json());
    app.use(router);
    console.log('IS CONNECT :' + connection.isConnected);


}).catch(error => console.log(error));

export { app }