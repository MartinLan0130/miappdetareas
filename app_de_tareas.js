const funciones = require ("./funciones");
const chalk = require("chalk");
let accion = process.argv[2]


switch(accion) {

case "Hola":
  funciones.hola();

break;

case "Todas":
funciones.todas();
break;

case "Pendiente":
  funciones.pendiente();
    break;

case "Crear":
funciones.crear();
break;

case "Eliminar":
funciones.eliminar();
  break;

case "Modificar":
  funciones.modificar();
  break;

default:
console.log (chalk.red("W T F ???"))  
}