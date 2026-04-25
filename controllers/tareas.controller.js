const model = require("../models/tareas.model");

exports.getTareas = (req, res) => {
  res.json(model.getAll());
};

exports.createTarea = (req, res) => {
  model.create(req.body.texto);
  res.redirect("/");
};

exports.completeTarea = (req, res) => {
  model.toggle(req.params.id);
  res.json({ ok: true });
};
