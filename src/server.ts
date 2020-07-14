import express from 'express';
import cors from 'cors';
import console from 'console';
import mongoose from 'mongoose';

import logRequests from './middlewares/logRequests.middleware';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(logRequests);

mongoose.connect('mongodb://localhost:27018/hemocentro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
