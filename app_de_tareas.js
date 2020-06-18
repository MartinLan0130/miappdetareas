const fs = require ("fs")
const chalk = require ("chalk");
const { Console } = require("console");


let tareasJson = fs.readFileSync("./tareas.JSON", "utf-8")
let tareas = JSON.parse(tareasJson)

function escribirArchivoJson (array) {let tareaJSON = JSON.stringify(array,null," ");
fs.writeFileSync("./tareas.json",tareaJSON)}

console.log(tareas)

let accion = process.argv[2]
let parametros = process.argv.slice(3)

switch(accion) {
case "Todas":
  tareas.forEach(function(element){ switch(element.Estado){ 
    
    case "Realizado":
    console.log(chalk.blue(element.Titulo) + chalk.greenBright(" (" + element.Estado +")" ));
    break;
    
    case "En Progreso":
    console.log(chalk.blue(element.Titulo) + chalk.yellowBright(" (" + element.Estado +")" ));
    break;
    
    case "Pendiente":
    console.log(chalk.blue(element.Titulo) + chalk.redBright(" (" + element.Estado +")" ));
    break;
            
        }});
        break;

case "Pendiente":
    tareas.filter(function(element){
      if(
        element.Estado=="Pendiente")
    {
      console.log(
        chalk.redBright(element.Titulo))}});
    break;

case "Crear":
let tareaNueva = {
  Titulo: parametros[0],Horario:parametros[1], Estado: "Pendiente"};

tareas.push(tareaNueva), 

console.log(chalk.whiteBright.underline("TAREA CREADA CON EXITO"));

escribirArchivoJson(tareas)
break;

case "Eliminar":
  let tareasActualizadas = tareas.filter(function(element){ return parametros[0] !== element.Titulo});
  
  console.log(chalk.redBright.underline("TAREA ELIMINADA CON EXITO"));

  escribirArchivoJson(tareasActualizadas)
  break;

case "Modificar":
  
  tareas.map (function(element) { if
  (element.Titulo === parametros [0]) {element.Estado = parametros[1],
      console.log(chalk.bgCyanBright.underline("TAREA MODIFICADA"))}
     
      escribirArchivoJson(tareas)
      
  })
  

  break;








}