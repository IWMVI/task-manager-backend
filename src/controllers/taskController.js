const taskService = require("../services/taskService");

module.exports = {
  async getAll(req, res) {
    try {
      const tasks = await taskService.getAll();
      res.json(tasks);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      res.status(500).json({ error: "Erro ao buscar tarefas", details: error.message });
    }
  },

  async getById(req, res) {
    try {
      const task = await taskService.getById(req.params.id);
      if (!task)
        return res.status(404).json({ error: "Tarefa não encontrada" });
      res.json(task);
    } catch (error) {
      console.error("Erro ao buscar tarefa:", error);
      res.status(500).json({ error: "Erro ao buscar tarefa", details: error.message });
    }
  },

  async create(req, res) {
    try {
      console.log("req.body no create:", req.body);
      const task = await taskService.create(req.body);
      res.status(201).json(task);
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
      // Mostrando detalhes do erro para facilitar depuração
      res.status(500).json({ error: "Erro ao criar tarefa", details: error.message });
    }
  },

  async update(req, res) {
    try {
      const task = await taskService.update(req.params.id, req.body);
      if (!task)
        return res.status(404).json({ error: "Tarefa não encontrada" });
      res.json(task);
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      res.status(500).json({ error: "Erro ao atualizar tarefa", details: error.message });
    }
  },

  async delete(req, res) {
    try {
      const task = await taskService.remove(req.params.id);
      if (!task)
        return res.status(404).json({ error: "Tarefa não encontrada" });
      res.status(204).send();
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
      res.status(500).json({ error: "Erro ao excluir tarefa", details: error.message });
    }
  },
};
