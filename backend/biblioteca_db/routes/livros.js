var express = require('express');
var router = express.Router();
var db = require('../config/db'); // Importa a configuração de banco de dados

// Rota para retornar todos os livros
router.get('/', async function (req, res, next) {
  try {
    // Consulta ao banco de dados
    const [rows] = await db.promise().query('SELECT * FROM livro');
    
    // Retorna os livros em formato JSON
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar os livros:', error.message);
    res.status(500).json({ error: 'Erro ao buscar os livros' });
  }
});

module.exports = router;
