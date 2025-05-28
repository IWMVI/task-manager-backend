// Importa o modelo Task (definido com Sequelize)
const Task = require("../models/Task");

// Retorna todas as tarefas do banco
const getAll = () => Task.findAll();

// Retorna uma tarefa específica pelo ID
const getById = (id) => Task.findByPk(id);

// Cria uma nova tarefa com os dados fornecidos
const create = (data) => Task.create(data);

// Atualiza uma tarefa existente pelo ID com os novos dados
const update = async (id, data) => {
  // Busca a tarefa pelo ID
  const task = await Task.findByPk(id);
  if (!task) return null;   // Se não encontrar, retorna null

  // Atualiza a tarefa com os dados recebidos
  await task.update(data);
  return task;              // Retorna a tarefa atualizada
};

// Remove uma tarefa pelo ID
const remove = async (id) => {
  // Busca a tarefa pelo ID
  const task = await Task.findByPk(id);
  if (!task) return null;   // Se não existir, retorna null

  // Exclui a tarefa do banco
  await task.destroy();
  return task;              // Retorna a tarefa excluída
};

// Exporta as funções para serem usadas em outros módulos (ex: controllers)
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
