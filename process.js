const fs = require("fs");
const chalk = require ("chalk")
const tareas = require ("./tareas")



let tareasJSON = JSON.stringify (tareas,null," ")
let accion = process.argv[2]
let parametros = process.argv.slice(3)

switch (accion) {
    
    case "todas" :
    case null:
        tareas.todas()
    break;
    
    case "pendiente":
    tareas.forEach(function(element){if(element.estado =="Pendiente"){console.log(chalk.blue(element.titulo) + " " +chalk.red( "(" + element.estado + ")"))}});
    break;
    
    case "crear":
     let tareaNueva = { titulo:parametros [0], horario:parametros[1],estado:"Pendiente"};

     tareas.push(tareaNueva), console.log("Tarea Creada Exitoasamente!!");
     escribirArchivoJson(tareas)
     break;

    //case "modificar":
    //tareas.map(function(element)
    //{if(element.titulo == parametros[0]) {element.estado==parametros[1]} })
      
    //escribirArchivoJson(tareas)
      //  break;

    case "Eliminar":
        let tareasActuzalizadas = tareas.filter(function(element){ return parametros[0] !== element.titulo

        });
        escribirArchivoJson(tareasActuzalizadas);
        console.log(chalk.redBright("TAREA ELIMINADA EXITOSAMENTE"))





    }
    


//console.log(tareas)
//console.log(tareasJSON)
//console.log(parametros)