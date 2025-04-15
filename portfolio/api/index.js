import express from 'express';
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const viewSchema = new mongoose.Schema({
  
});

const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});



export default app;