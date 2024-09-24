import express from 'express'
import { sumasRoute } from './sumas.js';
import { divisionesRoute } from './diviones.js';
import cors from 'cors';

const app = express();
const port = 3000;

//interpretar json en body
app.use(express.json())

//habilitar cors
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world!')
})
app.use('/sumas',sumasRoute)

app.use('/divisiones',divisionesRoute)

app.listen(port, () => {
    console.log(`La app esta esuchando el puerto ${port}`)
})
