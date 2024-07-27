// server.js
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env
const express = require('express');
const app = express();
const port = process.env.PORT || 9001;
const { buscarDados } = require('./utils/buscarDados'); // Importa a função de cálculo

// Middleware para parsear JSON
app.use(express.json()); // Para processar JSON no corpo das requisições POST


app.get('/api/buscarDados', async (req, res) => {

  const dados = await  buscarDados()  
  res.json({ ...dados });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
