// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', require('./routes/auth.routes'));

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`auth service lancé sur le port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('Erreur lors de la connexion à MongoDB', err);
    process.exit(1);
  });