const fs = require ("fs")
const chalk = require ("chalk");


let tareasJson = fs.readFileSync("./tareas.JSON", "utf-8")
let tareas = JSON.parse(tareasJson)

function escribirArchivoJson (array) {let tareaJSON = JSON.stringify(array,null," ");
fs.writeFileSync("./tareas.json",tareaJSON)}

let parametros = process.argv.slice(3)

function todas () {   tareas.forEach(function(element){ switch(element.Estado){ 
    
    case "Realizado":
    console.log(chalk.blue(element.Titulo) + chalk.greenBright(" (" + element.Estado +")" ));
    break;
    
    case "En Progreso":
    console.log(chalk.blue(element.Titulo) + chalk.yellowBright(" (" + element.Estado +")" ));
    break;
    
    case "Pendiente":
    console.log(chalk.blue(element.Titulo) + chalk.redBright(" (" + element.Estado +")" ));
    break;

}})};


function pendiente () {   tareas.filter(function(element){
    if(
      element.Estado=="Pendiente")
  {
    console.log(
      chalk.redBright(element.Titulo))}})};

function crear () { let tareaNueva = {
    Titulo: parametros[0],Horario:parametros[1], Estado: "Pendiente"};
  
  tareas.push(tareaNueva), 
  
  console.log(chalk.whiteBright.underline("TAREA CREADA CON EXITO"));
  
  escribirArchivoJson(tareas)}

function eliminar () {   let tareasActualizadas = tareas.filter(function(element){ return parametros[0] !== element.Titulo});
  
console.log(chalk.redBright.underline("TAREA ELIMINADA CON EXITO"));

escribirArchivoJson(tareasActualizadas)
};

function modificar () { tareas.map (function(element) { if
    (element.Titulo === parametros [0]) {element.Estado = parametros[1],
        console.log(chalk.bgCyanBright.underline("TAREA MODIFICADA"))}
       
        escribirArchivoJson(tareas)
          })};
function hola () {console.log(chalk.whiteBright  ("******************************************************************************"))
console.log (chalk.bgBlueBright.underline("Hola! Soy tu App de Tareas!"))
console.log(chalk.whiteBright("Conmigo podras listar todas tus tareas, actualizarlas y eliminarlas!"))
console.log(" ")
console.log(chalk.whiteBright("♠ Para ") + chalk.redBright("LISTAR ") + chalk.whiteBright ("tipea Todas."))
console.log(" ")
console.log(chalk.whiteBright("♥ Para ") + chalk.redBright("CREAR ") + chalk.whiteBright (" una nueva tarea tipea Crear luego su titulo y por ultimo su horario."))
console.log(" ")
console.log(chalk.whiteBright("♣ Para ") + chalk.redBright("ELIMINAR ") + chalk.whiteBright (" una tarea tipea Eliminar y luego su titulo."))
console.log(" ")
console.log(chalk.whiteBright("♣ Para ") + chalk.redBright("MODIFICAR ") + chalk.whiteBright (" el estado de una tarea, tipea Modificar, luego su titulo y por ultimo su nuevo Estado."))
console.log(" ")
console.log (chalk.bgBlueBright.underline("Espero ser  útil para vos!"))
console.log(chalk.whiteBright  ("******************************************************************************"))
}

module.exports = {
todas:todas, pendiente:pendiente,crear:crear,eliminar:eliminar,modificar:modificar, hola:hola



}