// Definimos elemtos y etiquetas
const botonD = document.createElement("button")
botonD.innerText = "Dia de la semana"
botonD.id = "botonDia"
botonD.classList = "botones"
main.appendChild(botonD)
const botonDia = document.getElementById("botonDia")
    
// Creamos una función para saber el día en el que estamos

function saberDia() {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    
    const diaHoy = new Date()
    const dia = dias[diaHoy.getDay()]
    const mes = meses[diaHoy.getMonth()]
    const año = diaHoy.getFullYear()
    
    return `${dia} ${diaHoy.getDate()} de ${mes} de ${año}`
}
function preguntarDia(){
    const p = document.createElement("p")
    p.classList = "parrafoDia"
    p.innerHTML =`Hoy es: ${saberDia()}`
    main.appendChild(p)
}

botonDia.addEventListener("click", preguntarDia)
