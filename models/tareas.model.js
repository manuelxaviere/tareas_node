const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "../data/tareas.json");

function read() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE));
}

function write(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

exports.getAll = () => read();

exports.create = (texto) => {
  const tareas = read();

  tareas.push({
    id: Date.now(),
    texto,
    done: false
  });

  write(tareas);
};

exports.toggle = (id) => {
  const tareas = read();

  const tarea = tareas.find(t => t.id == id);

  if (tarea) {
    tarea.done = !tarea.done;
    write(tareas);
  }
};
