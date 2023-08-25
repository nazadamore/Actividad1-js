// dia de la semana
const botonD = document.createElement("button")
botonD.innerText = "Dia de la semana"
botonD.id = "botonDia"
botonD.classList = "botones"
main.appendChild(botonD)
const botonDia = document.getElementById("botonDia")
    
botonDia.addEventListener("click", preguntarDia)

function sacarDiaSemana(){
    const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
    const diaHoy = new Date()
    const dia = dias[diaHoy.getDay()]
    
    return dia
}
function preguntarDia(){
    const preguntaDia = prompt("Para saber el dia de la semana escribe 'si', sino, ingresar cualquier cosa ")
    const p = document.createElement("p")
    const parrafoDia = p.innerHTML =`hoy es:   ${sacarDiaSemana()}`
    main.appendChild(p)
    preguntaDia === "si" && parrafoDia
}