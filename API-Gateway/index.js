const express = require('express');
const app = express();
const proxy = require("express-http-proxy")

app.use("/auth", proxy("http://localhost:5000"))

app.listen(8000, () => {
  console.log('API Gateway en cours d\'exécution sur le port 8000');
});

