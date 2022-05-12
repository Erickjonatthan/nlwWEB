import express from 'express'
import { routes } from './routes';
import cors from  'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
 



const porta = process.env.PORT;

app.listen(porta || 3333, () => {
    console.log(porta);
    console.log('Servidor no ar !');

})