/**
 * @file Controladores para as operações CRUD de tarefas.
 * @description Este módulo contém os controladores que lidam com as requisições HTTP
 * relacionadas a tarefas, interagindo com o `taskService` para realizar as operações.
 */

/**
 * Importa o serviço de tarefas que contém a lógica de negócios para interagir com o banco de dados.
 * @type {object}
 * @global
 */
const taskService = require("../services/taskService");

/**
 * Módulo que exporta os controladores para as operações de tarefas.
 * Cada método é uma função assíncrona que recebe os objetos de requisição (`req`)
 * e resposta (`res`) do Express.
 * @module TaskController
 */
module.exports = {
  /**
   * Obtém todas as tarefas.
   * Responde com um array de objetos de tarefas ou um erro 500 em caso de falha.
   *
   * @param {object} req - O objeto de requisição do Express.
   * @param {object} res - O objeto de resposta do Express.
   * @returns {Promise<void>} Uma promessa que resolve quando a resposta é enviada.
   */
  async getAll(req, res) {
    try {
      const tasks = await taskService.getAll();
      res.json(tasks);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      res
        .status(500)
        .json({ error: "Erro ao buscar tarefas", details: error.message });
    }
  },

  /**
   * Obtém uma tarefa específica pelo ID.
   * Responde com um objeto de tarefa, um erro 404 se a tarefa não for encontrada,
   * ou um erro 500 em caso de falha.
   *
   * @param {object} req - O objeto de requisição do Express. Espera `req.params.id` como o ID da tarefa.
   * @param {object} res - O objeto de resposta do Express.
   * @returns {Promise<void>} Uma promessa que resolve quando a resposta é enviada.
   */
  async getById(req, res) {
    try {
      const task = await taskService.getById(req.params.id);
      if (!task)
        return res.status(404).json({ error: "Tarefa não encontrada" });
      res.json(task);
    } catch (error) {
      console.error("Erro ao buscar tarefa:", error);
      res
        .status(500)
        .json({ error: "Erro ao buscar tarefa", details: error.message });
    }
  },

  /**
   * Cria uma nova tarefa.
   * Responde com a tarefa criada (status 201) ou um erro 500 em caso de falha.
   *
   * @param {object} req - O objeto de requisição do Express. Espera `req.body` contendo os dados da nova tarefa.
   * @param {object} res - O objeto de resposta do Express.
   * @returns {Promise<void>} Uma promessa que resolve quando a resposta é enviada.
   */
  async create(req, res) {
    try {
      console.log("req.body no create:", req.body); // Log para depuração, pode ser removido em produção.
      const task = await taskService.create(req.body);
      res.status(201).json(task);
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
      res
        .status(500)
        .json({ error: "Erro ao criar tarefa", details: error.message });
    }
  },

  /**
   * Atualiza uma tarefa existente pelo ID.
   * Responde com a tarefa atualizada, um erro 404 se a tarefa não for encontrada,
   * ou um erro 500 em caso de falha.
   *
   * @param {object} req - O objeto de requisição do Express. Espera `req.params.id` como o ID e `req.body` com os dados atualizados.
   * @param {object} res - O objeto de resposta do Express.
   * @returns {Promise<void>} Uma promessa que resolve quando a resposta é enviada.
   */
  async update(req, res) {
    try {
      const task = await taskService.update(req.params.id, req.body);
      if (!task)
        return res.status(404).json({ error: "Tarefa não encontrada" });
      res.json(task);
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      res
        .status(500)
        .json({ error: "Erro ao atualizar tarefa", details: error.message });
    }
  },

  /**
   * Exclui uma tarefa pelo ID.
   * Responde com um status 204 (No Content) em caso de sucesso,
   * um erro 404 se a tarefa não for encontrada, ou um erro 500 em caso de falha.
   *
   * @param {object} req - O objeto de requisição do Express. Espera `req.params.id` como o ID da tarefa a ser excluída.
   * @param {object} res - O objeto de resposta do Express.
   * @returns {Promise<void>} Uma promessa que resolve quando a resposta é enviada.
   */
  async delete(req, res) {
    try {
      const task = await taskService.remove(req.params.id);
      if (!task)
        return res.status(404).json({ error: "Tarefa não encontrada" });
      res.status(204).send(); // Responde com 204 (No Content) para exclusão bem-sucedida.
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
      res
        .status(500)
        .json({ error: "Erro ao excluir tarefa", details: error.message });
    }
  },
};
