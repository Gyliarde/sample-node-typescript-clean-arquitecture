import express from 'express';
import { createConnection, getConnectionManager } from 'typeorm';
import { router } from '../routes/routes';

const app = express();


app.use(express.json());
app.use(router);

createConnection().then(connection => {
    console.log('IS CONNECT :' + connection.isConnected);
}).catch(error => console.log(error));



export { app }