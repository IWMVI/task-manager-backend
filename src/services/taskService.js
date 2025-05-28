const Task = require("../models/Task");

const getAll = () => Task.findAll();

const getById = (id) => Task.findByPk(id);

const create = (data) => Task.create(data);

const update = async (id, data) => {
  const task = await Task.findByPk(id);
  if (!task) return null;
  await task.update(data);
  return task;
};

const remove = async (id) => {
  const task = await Task.findByPk(id);
  if (!task) return null;
  await task.destroy();
  return task;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
