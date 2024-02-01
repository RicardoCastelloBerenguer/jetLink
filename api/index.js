import express from 'express'
import sequelize from './config/database.js';
import Url from './models/Url.js';
import User from './models/User.js';
import dotenv from 'dotenv'
import cors from 'cors'
import urlsRouter from './routes/urls.js';
import userRouter from './routes/auth.js';

const app = express();

dotenv.config()

//SERVER SETUP

const corsOptions = {
    origin: process.env.BASE_URL_FRONT || 'http://localhost:3000',
    optionsSuccessStatus: 200, // algunas versiones de los navegadores 204 
  };

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sincroniza el modelo con la base de datos
(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Base de datos sincronizada correctamente');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
})();


app.use('/', urlsRouter);
app.use('/auth', userRouter);

app.listen(process.env.PORT , () => {
    console.log("listening on port " + process.env.PORT);
});


