/**
 * @file Configuração da conexão com o banco de dados utilizando Sequelize.
 * @description Este arquivo inicializa e exporta uma instância do Sequelize,
 * configurando a conexão com o banco de dados através de variáveis de ambiente.
 */

/**
 * Importa a classe `Sequelize` do pacote `sequelize`.
 * Esta classe é usada para criar e gerenciar a conexão com o banco de dados.
 * @external Sequelize
 * @see https://sequelize.org/docs/v6/
 */
const { Sequelize } = require("sequelize");

/**
 * Carrega as variáveis de ambiente do arquivo `.env` para `process.env`.
 * É essencial que este método seja chamado antes de acessar qualquer variável de ambiente.
 * @external dotenv
 * @see https://www.npmjs.com/package/dotenv
 */
require("dotenv").config();

/**
 * Instância do Sequelize configurada para conectar ao banco de dados.
 * Os parâmetros de conexão (nome do banco, usuário, senha, host, dialeto)
 * são obtidos das variáveis de ambiente para garantir flexibilidade e segurança.
 *
 * @type {Sequelize}
 * @property {string} process.env.DB_NAME - O nome do banco de dados.
 * @property {string} process.env.DB_USER - O nome de usuário para autenticação.
 * @property {string} process.env.DB_PASSWORD - A senha para autenticação.
 * @property {object} options - Objeto de opções de configuração do Sequelize.
 * @property {string} options.host - O host do banco de dados.
 * @property {string} options.dialect - O dialeto do banco de dados (ex: 'mysql', 'postgres').
 * @property {boolean} options.logging - Define se o Sequelize deve logar as operações SQL no console.
 * Definido como `false` para desabilitar o log detalhado.
 */
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false, // Desabilita o log de queries SQL no console.
  }
);

/**
 * Exporta a instância configurada do Sequelize.
 * Isso permite que outros módulos da aplicação utilizem esta conexão para interagir com o banco de dados.
 * @module sequelizeConnection
 */
module.exports = sequelize;
