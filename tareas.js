let tareas = [
    {Titulo:"Bañar a Mora", Horario: "A la noche", Estado:"Pendiente"},
    {Titulo:"Ir al super", Horario: "A la tarde", Estado:"En Progreso"},
    {Titulo:"Practicar Js", Horario: "A la mañana", Estado:"Realizado"}
]

let tareasJson = JSON.stringify(tareas,null," ")
console.log(tareasJson)