const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Task = sequelize.define("Task", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  completado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  dataConclusao: {
    type: DataTypes.DATE,
    allowNull: true, // permite null para tarefas não concluídas
  },
});

module.exports = Task;
