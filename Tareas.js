const valorComun = 100

class Tarea {
  constructor(codigo, duracion, complejidad) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad = complejidad;
  }
  getDuracion() {
    return this.duracion;
  }
  getCodigo() {
    return this.codigo;
  }
  getCosto() {
    const base = this.duracion * valorComun;
    const extra = this.complejidad.CostoExtra(base, this.duracion);
    return base + extra;
  }
  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Costo: ${this.getCosto()}`);
  }
}

class TareaCompuesta {
  constructor(codigo, duracion, complejidad, tareas = []) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad = complejidad;
    this.tareas = tareas;
  }
  getDuracion() {
    return this.tareas.reduce((acum, tarea) => acum + tarea.getDuracion(), this.duracion);
  }
  getCodigo() {
    return this.codigo;
  }
  getCosto() {
    const costoSubtareas = this.tareas.reduce((acum, tarea) => acum + tarea.getCosto(), 0);
    const costoBase = this.duracion * valorComun;
    const extra = this.complejidad.CostoExtra(costoBase, this.duracion);
    let total = costoSubtareas + costoBase + extra;
    if (this.tareas.length > 3) {
      total *= 1.04;
    }
    return total;
  }
  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Costo: ${this.getCosto()}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
}

module.exports = { Tarea, TareaCompuesta };