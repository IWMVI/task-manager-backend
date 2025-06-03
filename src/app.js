/**
 * @file Arquivo principal da aplicação Express.
 * @description Configura e inicializa a aplicação Express, incluindo middlewares e rotas.
 */

/**
 * Importa o framework Express para construir a aplicação web.
 * @external express
 * @see https://expressjs.com/
 */
const express = require("express");

/**
 * Importa o middleware CORS para habilitar requisições de diferentes origens.
 * @external cors
 * @see https://www.npmjs.com/package/cors
 */
const cors = require("cors");

/**
 * Importa as definições de rota para as operações de tarefas.
 * @type {express.Router}
 * @see module:TaskRoutes
 */
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());

// Fundamental para interpretar JSON no corpo das requisições
app.use(express.json());

// Rotas da API
app.use("/api/tasks", taskRoutes);

module.exports = app;
