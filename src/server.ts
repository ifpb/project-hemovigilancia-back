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

// mongoose.connect('mongodb://localhost:27017/hemocentro', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect(
  'mongodb+srv://db_test:mongo123456@cluster0.b429c.gcp.mongodb.net/hemovigilanciq?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.use(routes);

const PORT : string|number = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started on port 3333!');
});
