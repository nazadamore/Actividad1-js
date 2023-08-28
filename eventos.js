// Definimos el valor que va a tomar el dolar mediante una API
let dolar
fetch("https://api.bluelytics.com.ar/v2/latest")
.then((res) => res.json())
.then((data) => {
    const dolarValue = data.blue
    console.log('Nueva cotización', dolarValue.value_avg)
    dolar = dolarValue.value_avg
})
.catch((error) => {
    console.error("Error:", error)
})

// Creamos el ingreso del usuario
class Persona {
    nombre() {
        let nombreUsuario = document.getElementById("nombre").value
    
        return nombreUsuario
    }
    
    apellido() {
        let apellidoUsuario = document.getElementById("apellido").value
    
        return apellidoUsuario
    }

    edad(){
        let edadUsuario = document.getElementById("edad").value

        return edadUsuario

    }
}

const persona = new Persona()
const nombre = persona.nombre()
const apellido = persona.apellido()
const edad = persona.edad()

// Le agrego un evento al boton ya creado para usar los elementos de la clase persona
const boton1 = document.getElementById("botonEnviar1")
boton1.addEventListener("click", () => {
    
    

    const h6 = document.createElement("h6")
    h6.innerHTML=`Bienvenido: ${nombre} ${apellido} ya podes realizar la conversión`
    divFormNombre.appendChild(h6)

    console.log("Nombre:", nombre)
    console.log("Apellido:", apellido)
    console.log("Edad:", edad)
    console.log("Bienvenido al conversor de divisas", nombre, apellido)

    let arrayHistorial = []

    const usuarioGuardado = localStorage.getItem("usuario")
    if (usuarioGuardado) {
        arrayHistorial = JSON.parse(usuarioGuardado)
    }

    arrayHistorial.push({ 
        Nombre: nombre,
        Apellido: apellido,
        Edad: edad,
    })

    const encontrarNombre = arrayHistorial.map((i) => i.Nombre)
    console.log(encontrarNombre)

    localStorage.setItem("usuario", JSON.stringify(arrayHistorial))

    console.log(...arrayHistorial)


const conversionElegida = document.getElementById("conversionElegida")
const botonEnviar2 = document.getElementById("botonEnviar2")
const tipoDeConversion = document.getElementById("tipoDeConversion")


// Una vez hecho el ingreso de usuario, le agrego un evento al boton del formulario para que desplace la siguiente parte

tipoDeConversion.addEventListener("change", (event) => {
    const opcion = event.target.value

    if (opcion === "1") {
        conversionElegida.innerHTML = `
            <div>
                <label>Cantidad en Pesos:</label>
                <input type="number" id="cantidadPesos" required>
            </div>
        `
    } else if (opcion === "2") {
        conversionElegida.innerHTML = `
            <div>
                <label>Cantidad en dólares:</label>
                <input type="number" id="cantidadDolares" required>
            </div>
        `
    }
})

// Agrego un tercer y ultimo evento para que realice la conversion solicitada

let result

botonEnviar2.addEventListener("click", () => {
    const opcion = document.getElementById("tipoDeConversion").value

    if (opcion === "1") {

        const cantidadPesos = parseFloat(document.getElementById("cantidadPesos").value)
        result = cantidadPesos / dolar

        const h5 = document.createElement("h5")
        h5.innerHTML=`La cantidad en Pesos: ${cantidadPesos} convertida a dólares es de: ${result.toFixed(2)}`
        conversionElegida.appendChild(h5)

    } else if (opcion === "2") {

        const cantidadDolares = parseFloat(document.getElementById("cantidadDolares").value)
        result = cantidadDolares * dolar

        const h5 = document.createElement("h5")
        h5.innerHTML =`La cantidad en dólares: ${cantidadDolares} convertida a Pesos es de: ${result.toFixed(2)}`
        conversionElegida.appendChild(h5)
    }

    //Agrego una funcion con una promesa + libreria para el resultado

    function guardarDatos(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const exito = true
                if(exito){
                    const datos = {mensaje: "Datos guardados exitosamente, el resultado es: ", resultado: result.toFixed(2)}
                    resolve(datos)
                }else {
                    const error = new Error("Error al guardar los datos")
                    reject(error)
                }
            }, 1000)
        })
    }
    guardarDatos()
        .then(datos =>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: datos.mensaje + " " + datos.resultado,
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true
            })
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            console.log("fin del proceso")
        })
    })
})