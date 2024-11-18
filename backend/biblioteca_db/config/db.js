const mysql = require('mysql2');

// Criando a conexão com o banco de dados MySQL
const connection = mysql.createPool({
  host: 'localhost',        // Endereço do servidor MySQL
  user: 'root',             // Usuário do banco
  password: '',             // Senha do banco
  database: 'biblioteca',   // Nome do banco de dados
  waitForConnections: true, // Permite aguardar conexões antes de rejeitar
  connectionLimit: 10,      // Limita o número de conexões simultâneas
  queueLimit: 0             // Sem limite de filas para conexões
});

// Exporta a conexão para ser utilizada em outros arquivos
module.exports = connection;
