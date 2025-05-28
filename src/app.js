const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());

// Fundamental para interpretar JSON no corpo das requisições
app.use(express.json());

// Rotas da API
app.use("/api/tasks", taskRoutes);

module.exports = app;
