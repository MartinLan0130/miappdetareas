function leerArchivoJason () { const tareasJ = fs.readFileSync(".tareas.JSON","utf-8") ; return JSON.parse(tareasJ)};

function escribirArchivoJson (array) {let tareaJSON = JSON.stringify(array,null," ");
fs.writeFileSync("./tareas.json",tareaJSON)}



   function todas(){ let tareas = leerArchivoJason;

    tareas.forEach(function(element){
         switch (element.estado) {
        case "Realizado":
       console.log(chalk.blue(element.titulo) + " " +chalk.green( "(" + element.estado + ")"));
       break;
       case "En progreso": 
       console.log(chalk.blue(element.titulo) + " " + chalk.yellow( "(" + element.estado + ")"));
       break;
       case "Pendiente":
       console.log(chalk.blue(element.titulo) + " " +chalk.red( "(" + element.estado + ")"))}})   }


       module.exports={ todas : todas,

}