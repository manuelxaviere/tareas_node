const express = require("express");
const router = express.Router();

const controller = require("../controllers/tareas.controller");

router.get("/", controller.getTareas);
router.post("/", controller.createTarea);
router.put("/:id", controller.completeTarea);

module.exports = router;
