const cuerpo = document.body
const main = document.createElement("main")
cuerpo.prepend(main)

const divA = document.createElement("div")
divA.innerHTML = `<div>
<label>Nombre:</label>
<input type="text" id="nombre" required>
</div>
<div>
<label">Apellido</label>
<input type="text" id="apellido" required>
</div>
<div>
<label>Edad</label>
<input type="number" id="edad" required>
</div>
<button id="botonEnviar1">Enviar</button>`
main.appendChild(divA)

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
document.getElementById("botonEnviar1").addEventListener("click", () => {
    const nombre = persona.nombre();
    const apellido = persona.apellido();
    const edad = persona.edad();
    
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Edad:", edad);
    console.log("Bienvenido al conversor de divisas", nombre, apellido)

    let arrayHistorial = [];

    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
        arrayHistorial = JSON.parse(usuarioGuardado);
    }

    arrayHistorial.push({ 
        Nombre: nombre,
        Apellido: apellido,
        Edad: edad,
    });

    const encontrarNombre = arrayHistorial.map((i) => i.Nombre)
    console.log(encontrarNombre)

    localStorage.setItem("usuario", JSON.stringify(arrayHistorial));

    console.log(...arrayHistorial)

const form = document.createElement("form");
form.innerHTML = `
    <div>
        <label>Seleccione el tipo de conversión:</label>
        <select id="tipoDeConversion">
            <option value="1">De pesos a dolar</option>
            <option value="2">De dolar a pesos</option>
        </select>
    </div>
    <div id="conversionElegida">
        <!-- aca se van a mostrar los campos según la opción seleccionada -->
    </div>
    <button type="button" id="botonEnviar2">Enviar</button>
`;
main.appendChild(form);

const conversionElegida = document.getElementById("conversionElegida");
const botonEnviar2 = document.getElementById("botonEnviar2");
const tipoDeConversion = document.getElementById("tipoDeConversion")

const dolar = 700;

tipoDeConversion.addEventListener("change", (event) => {
    const opcion = event.target.value;

    if (opcion === "1") {
        conversionElegida.innerHTML = `
            <div>
                <label>Cantidad en Pesos:</label>
                <input type="number" id="cantidadPesos" required>
            </div>
        `;
    } else if (opcion === "2") {
        conversionElegida.innerHTML = `
            <div>
                <label>Cantidad en dólares:</label>
                <input type="number" id="cantidadDolares" required>
            </div>
        `;
    }
});

botonEnviar2.addEventListener("click", () => {
    const opcion = document.getElementById("tipoDeConversion").value;

    if (opcion === "1") {

        const cantidadPesos = parseFloat(document.getElementById("cantidadPesos").value);
        const result = cantidadPesos / dolar;

        const h5 = document.createElement("h5")
        h5.innerHTML=`La cantidad en Pesos: ${cantidadPesos} convertida a dólares es de: ${result.toFixed(2)}`
        conversionElegida.appendChild(h5)

    } else if (opcion === "2") {

        const cantidadDolares = parseFloat(document.getElementById("cantidadDolares").value);
        const result = cantidadDolares * dolar;

        const h5 = document.createElement("h5")
        h5.innerHTML =`La cantidad en dólares: ${cantidadDolares} convertida a Pesos es de: ${result.toFixed(2)}`
        conversionElegida.appendChild(h5)
        
    }
});
});




