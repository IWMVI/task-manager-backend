const Task = require("../models/Task");

module.exports = {
  async getAll(req, res) {
    try {
      const tasks = await Task.findAll();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar tarefas" });
    }
  },

  async getById(req, res) {
    try {
      const task = await Task.findByPk(req.params.id);
      if (task) {
        res.json(taks);
      } else {
        res.status(404).json({ error: "Tarefa não encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar tarefa" });
    }
  },

  async create(req, res) {
    try {
      const task = await Task.create(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar uma tarefa" });
    }
  },

  async update(req, res) {
    try {
      const task = await task.findByPk(req.params.id);
      if (task) {
        await task.update(req.body);
        res.json(task);
      } else {
        res.status(404).json({ error: "Tarefa não encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar a tarefa" });
    }
  },

  async delete(req, res) {
    try {
      const task = await Task.findByPk(req.params.id);
      if (task) {
        await task.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Tarefa não encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao excluir a tarefa" });
    }
  },
};
