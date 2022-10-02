import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import usuariosRoutes from './routes/usuarios.js';
import tarefasRoutes from './routes/tarefas.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/usuarios', usuariosRoutes);
app.use('/tarefas', tarefasRoutes);
const CONNECTION_URL =
  'mongodb+srv://teste:teste123@cluster0.lllqt.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server run ${PORT}`)))
  .catch((error) => console.log(error));
