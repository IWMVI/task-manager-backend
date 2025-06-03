/**
 * @file Definição do modelo de Tarefa para o Sequelize.
 * @description Este arquivo define a estrutura da tabela 'Task' no banco de dados,
 * incluindo seus atributos e tipos de dados.
 */

/**
 * Importa o objeto DataTypes do Sequelize para definir os tipos de dados das colunas.
 * @external DataTypes
 * @see https://sequelize.org/docs/v6/core-concepts/datatypes/
 */
const { DataTypes } = require("sequelize");

/**
 * Importa a instância do Sequelize configurada para a conexão com o banco de dados.
 * @external sequelize
 * @see module:sequelizeConnection
 */
const sequelize = require("../config/database");

/**
 * Define o modelo 'Task' para o Sequelize.
 * Este modelo representa a tabela de tarefas no banco de dados,
 * especificando suas colunas (atributos), tipos de dados e validações.
 *
 * @typedef {object} Task
 * @property {number} id - O ID único da tarefa (gerado automaticamente pelo Sequelize).
 * @property {string} titulo - O título da tarefa. Não pode ser nulo.
 * @property {string} [descricao] - A descrição detalhada da tarefa. Pode ser nula.
 * @property {boolean} completado - Indica se a tarefa está concluída. O valor padrão é `false`.
 * @property {Date} [dataConclusao] - A data em que a tarefa foi concluída. Pode ser nula
 * se a tarefa ainda não estiver completa.
 */
const Task = sequelize.define("Task", {
  /**
   * O título da tarefa.
   * @type {DataTypes.STRING}
   * @property {boolean} allowNull - Indica se o campo pode ser nulo. Definido como `false`.
   */
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  /**
   * A descrição detalhada da tarefa.
   * @type {DataTypes.TEXT}
   * @property {boolean} allowNull - Por padrão é `true` se não especificado, permitindo nulos.
   */
  descricao: {
    type: DataTypes.TEXT,
  },
  /**
   * Status de conclusão da tarefa.
   * @type {DataTypes.BOOLEAN}
   * @property {boolean} defaultValue - O valor padrão para este campo é `false`.
   */
  completado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  /**
   * A data de conclusão da tarefa.
   * @type {DataTypes.DATE}
   * @property {boolean} allowNull - Permite que este campo seja nulo se a tarefa ainda não estiver concluída.
   */
  dataConclusao: {
    type: DataTypes.DATE,
    allowNull: true, // permite null para tarefas não concluídas
  },
});

/**
 * Exporta o modelo Task para ser utilizado em outras partes da aplicação,
 * permitindo operações CRUD no banco de dados.
 * @module TaskModel
 */
module.exports = Task;
