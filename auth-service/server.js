// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', require('./routes/auth.routes'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connecté');
    app.listen(process.env.PORT, () => {
      console.log(`Microservice Auth lancé sur le port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('Erreur MongoDB', err));
