import 'reflect-metadata';
import express from 'express';
import console from 'console';
import cors from 'cors';

import routes from './routes/index';
import './database';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(3333, () => { console.log('Server started on port 3333!'); });
