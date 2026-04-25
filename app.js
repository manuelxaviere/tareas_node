const express = require("express");
const path = require("path");

const tareasRoutes = require("./routes/tareas.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.locals.appName = process.env.APP_NAME || "tareas_node_default";

app.use(express.static(path.join(__dirname, "public")));

app.use("/tareas", tareasRoutes);

module.exports = app;
