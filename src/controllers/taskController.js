const taskService = require("../services/taskService");

module.exports = {
  async getAll(req, res) {
    try {
      const tasks = await taskService.getAll();
      res.json(tasks);
    } catch {
      res.status(500).json({ error: "Erro ao buscar tarefas" });
    }
  },

  async getById(req, res) {
    try {
      const task = await taskService.getById(req.params.id);
      if (!task)
        return res.status(404).json({ error: "Tarefa não encontrada" });
      res.json(task);
    } catch {
      res.status(500).json({ error: "Erro ao buscar tarefa" });
    }
  },

  async create(req, res) {
    try {
      const task = await taskService.create(req.body);
      res.status(201).json(task);
    } catch {
      res.status(500).json({ error: "Erro ao criar tarefa" });
    }
  },

  async update(req, res) {
    try {
      const task = await taskService.update(req.params.id, req.body);
      if (!task)
        return res.status(404).json({ error: "Tarefa não encontrada" });
      res.json(task);
    } catch {
      res.status(500).json({ error: "Erro ao atualizar tarefa" });
    }
  },

  async delete(req, res) {
    try {
      const task = await taskService.remove(req.params.id);
      if (!task)
        return res.status(404).json({ error: "Tarefa não encontrada" });
      res.status(204).send();
    } catch {
      res.status(500).json({ error: "Erro ao excluir tarefa" });
    }
  },
};
