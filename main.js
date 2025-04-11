const Proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require('./Tareas');
const { Minima, Media, Maxima } = require('./Complejidad');

const minima = new Minima();
const media = new Media();
const maxima = new Maxima();

const tarea1 = new Tarea("T1", 5, minima);
const tarea2 = new Tarea("T2", 10, media);
const tarea3 = new Tarea("T3", 15, maxima);

Proyecto.agregarTarea(tarea1);
Proyecto.agregarTarea(tarea2);
Proyecto.agregarTarea(tarea3);

Proyecto.mostrarTareas();
console.log(`Duracion Total: ${Proyecto.getDuracion()}`);

const tcompuestas = [
  new Tarea("TS1", 2, minima),
  new Tarea("TS2", 3, media),
  new Tarea("TS3", 1, maxima)
];

const compuesta1 = new TareaCompuesta("TC1", 10, media, tcompuestas)
compuesta1.mostrarTarea();

Proyecto.agregarTarea(compuesta1);
console.log(`Duracion Total: ${Proyecto.getDuracion()}`);