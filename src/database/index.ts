import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27018/hemocentro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});