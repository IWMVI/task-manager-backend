/**
 * @file Arquivo de inicialização do servidor.
 * @description Este arquivo é responsável por iniciar a aplicação Express e sincronizar
 * o banco de dados com os modelos definidos.
 */

/**
 * Importa a instância configurada da aplicação Express.
 * @type {express.Application}
 * @see module:ExpressApp
 */
const app = require("./app");

/**
 * Importa a instância do Sequelize configurada para a conexão com o banco de dados.
 * @type {Sequelize}
 * @see module:sequelizeConnection
 */
const sequelize = require("./config/database");

/**
 * Carrega as variáveis de ambiente do arquivo `.env` para `process.env`.
 * Essencial para acessar a porta do servidor e outras configurações.
 * @external dotenv
 * @see https://www.npmjs.com/package/dotenv
 */
require("dotenv").config();

/**
 * Define a porta em que o servidor irá rodar.
 * Tenta usar a porta definida na variável de ambiente `PORT` ou padrão para `3000`.
 * @type {number}
 * @default 3000
 */
const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log("Banco de dados conectado e sincronizado");
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
