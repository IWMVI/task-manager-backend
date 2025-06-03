/**
 * @file Serviço de Tarefas.
 * @description Este módulo contém as funções de lógica de negócios para interagir com o modelo de Tarefa no banco de dados,
 * abstraindo as operações CRUD diretas para os controladores.
 */

/**
 * Importa o modelo `Task` definido pelo Sequelize.
 * Este modelo é a representação da tabela de tarefas no banco de dados e permite
 * a execução de operações CRUD.
 * @type {import("../models/Task")}
 * @see module:TaskModel
 */
const Task = require("../models/Task");

/**
 * Retorna todas as tarefas registradas no banco de dados.
 * @returns {Promise<Array<Task>>} Uma promessa que resolve para um array de objetos de Tarefa.
 */
const getAll = () => Task.findAll();

/**
 * Retorna uma tarefa específica pelo seu ID.
 * @param {number} id - O ID da tarefa a ser buscada.
 * @returns {Promise<Task|null>} Uma promessa que resolve para um objeto de Tarefa se encontrado, ou `null` caso contrário.
 */
const getById = (id) => Task.findByPk(id);

/**
 * Cria uma nova tarefa no banco de dados com os dados fornecidos.
 * @param {object} data - Um objeto contendo os dados da nova tarefa (ex: `{ titulo: '...', descricao: '...' }`).
 * @returns {Promise<Task>} Uma promessa que resolve para o objeto de Tarefa recém-criado.
 */
const create = (data) => Task.create(data);

/**
 * Atualiza uma tarefa existente no banco de dados.
 * Procura a tarefa pelo ID e, se encontrada, aplica as atualizações.
 * @param {number} id - O ID da tarefa a ser atualizada.
 * @param {object} data - Um objeto contendo os campos a serem atualizados e seus novos valores.
 * @returns {Promise<Task|null>} Uma promessa que resolve para o objeto de Tarefa atualizado, ou `null` se a tarefa não for encontrada.
 */
const update = async (id, data) => {
  // Busca a tarefa pelo ID
  const task = await Task.findByPk(id);
  if (!task) {
    return null; // Se não encontrar, retorna null
  }

  // Atualiza a tarefa com os dados recebidos
  await task.update(data);
  return task; // Retorna a tarefa atualizada
};

/**
 * Remove uma tarefa do banco de dados pelo seu ID.
 * Procura a tarefa pelo ID e, se encontrada, a exclui.
 * @param {number} id - O ID da tarefa a ser removida.
 * @returns {Promise<Task|null>} Uma promessa que resolve para o objeto de Tarefa excluído, ou `null` se a tarefa não for encontrada.
 */
const remove = async (id) => {
  // Busca a tarefa pelo ID
  const task = await Task.findByPk(id);
  if (!task) {
    return null; // Se não existir, retorna null
  }

  // Exclui a tarefa do banco
  await task.destroy();
  return task; // Retorna a tarefa excluída
};

/**
 * Objeto que exporta todas as funções do serviço de tarefas.
 * @module TaskService
 * @property {function(): Promise<Array<Task>>} getAll - Função para obter todas as tarefas.
 * @property {function(number): Promise<Task|null>} getById - Função para obter uma tarefa por ID.
 * @property {function(object): Promise<Task>} create - Função para criar uma nova tarefa.
 * @property {function(number, object): Promise<Task|null>} update - Função para atualizar uma tarefa existente.
 * @property {function(number): Promise<Task|null>} remove - Função para remover uma tarefa.
 */
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
