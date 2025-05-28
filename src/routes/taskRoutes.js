const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Rotas CRUD para tarefas
router.get("/", taskController.getAll);
router.get("/:id", taskController.getById);
router.post("/", taskController.create);
router.put("/:id", taskController.update);
router.delete("/:id", taskController.delete);

// Rota teste para debug de req.body
router.post("/teste", (req, res) => {
  console.log("req.body no /tasks/teste:", req.body);
  res.json({ received: req.body });
});

module.exports = router;
