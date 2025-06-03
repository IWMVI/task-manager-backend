/**
 * @file Definição das rotas da API de Tarefas.
 * @description Este módulo configura todas as rotas HTTP relacionadas às operações de tarefas,
 * mapeando cada endpoint para seu respectivo controlador.
 */

/**
 * Importa o módulo Router do Express para criar um roteador modular.
 * @external express
 * @see https://expressjs.com/en/4x/api.html#router
 */
const express = require("express");
const router = express.Router();

/**
 * Importa os controladores que contêm a lógica para cada operação de tarefa.
 * @type {object}
 * @see module:TaskController
 */
const taskController = require("../controllers/taskController");

/**
 * Rotas CRUD para o gerenciamento de tarefas.
 * Cada rota é mapeada para uma função específica no controlador.
 */

/**
 * @route GET /api/tasks
 * @description Retorna todas as tarefas cadastradas.
 * @access Public
 */
router.get("/", taskController.getAll);

/**
 * @route GET /api/tasks/:id
 * @description Retorna uma tarefa específica pelo ID.
 * @param {string} id - O ID da tarefa.
 * @access Public
 */
router.get("/:id", taskController.getById);

/**
 * @route POST /api/tasks
 * @description Cria uma nova tarefa.
 * @access Public
 * @body {object} task - Os dados da tarefa a ser criada.
 * @body {string} task.titulo - O título da tarefa.
 * @body {string} [task.descricao] - A descrição da tarefa.
 * @body {boolean} [task.completado=false] - O status de conclusão da tarefa.
 * @body {Date} [task.dataConclusao] - A data de conclusão da tarefa.
 */
router.post("/", taskController.create);

/**
 * @route PUT /api/tasks/:id
 * @description Atualiza uma tarefa existente.
 * @param {string} id - O ID da tarefa a ser atualizada.
 * @access Public
 * @body {object} task - Os dados atualizados da tarefa.
 * @body {string} [task.titulo] - O novo título da tarefa.
 * @body {string} [task.descricao] - A nova descrição da tarefa.
 * @body {boolean} [task.completado] - O novo status de conclusão da tarefa.
 * @body {Date} [task.dataConclusao] - A nova data de conclusão da tarefa.
 */
router.put("/:id", taskController.update);

/**
 * @route DELETE /api/tasks/:id
 * @description Remove uma tarefa existente.
 * @param {string} id - O ID da tarefa a ser removida.
 * @access Public
 */
router.delete("/:id", taskController.delete);

/**
 * @route POST /api/tasks/teste
 * @description Rota de debug para testar o parsing do corpo da requisição.
 * @access Public
 * @deprecated Esta rota é apenas para fins de desenvolvimento e deve ser removida em produção.
 */
router.post("/teste", (req, res) => {
  console.log("req.body no /tasks/teste:", req.body);
  res.json({ received: req.body });
});

/**
 * Exporta o roteador configurado para ser usado na aplicação principal.
 * @module TaskRoutes
 */
module.exports = router;
