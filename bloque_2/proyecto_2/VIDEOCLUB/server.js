const express = require('express');
const connectDB = require('./config/db');
const cors = require ('cors');
const app = express ();
const authRouter = require ('./routes/auth');
const movieRouter = require('./routes/movies');
const memberRouter = require('./routes/members');
const orderRouter = require('./routes/orders');

app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000', // Origen permitido
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

require('dotenv').config();

const server = express()

connectDB()


server.use(express.json())


server.use('/auth', authRouter)
server.use('/movies', movieRouter)
server.use('/members', memberRouter);
server.use('/orders', orderRouter);

app.listen(5000, () => console.log('SERVIDOR ON FIRE'));


server.listen(3000, () => {
    console.log('SERVIDOR EN PLAY, COMIENZA LA HISTORIA')
})
