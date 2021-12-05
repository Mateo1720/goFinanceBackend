import express from 'express';

import cors from 'cors'
import ruta2 from './rutas';
const app = express();
app.set("port", 3000);

app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());

app.use(ruta2)



app.listen(app.get('port'))

console.log('Server on port', app.get('port'))
//Iniciar servidor con npm start (Tener inicializado mysql)