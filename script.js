alert("Bienvenido al conversor de Dolar a Peso y de Peso a Dolar")

// Ingreso de usuario
class Persona {
    nombre() {
        let nombreUsuario = prompt("Ingrese su nombre")
    
        while (isFinite(nombreUsuario)){
            console.error("error, reingrese")
            nombreUsuario = prompt("reingrese el nombre, solo se admiten letras")
        }
        console.log(nombreUsuario)
        return nombreUsuario
    }
    
    apellido() {
        let apellidoUsuario = prompt("Ingrese su apellido")
    
        while (isFinite(apellidoUsuario)){
            console.error("error, reingrese")
            apellidoUsuario = prompt("reingrese el nombre, solo se admiten letras")
        }
        console.log(apellidoUsuario)
        return apellidoUsuario
    }

    edad(){
        let edadUsuario = prompt("Ingrese su edad")

        if (edadUsuario <= 0){
            alert("ingrese un numero mayor a 0")
            edadUsuario = prompt("ingrese de vuelta")
        } else{
            alert("Gracias")
        }
        console.log(edadUsuario)
        return edadUsuario
    }
}

// dia de la semana
function sacarDiaSemana(){
    const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
    const diaHoy = new Date()
    const dia = dias[diaHoy.getDay()]
    return dia
}
function preguntarDia(){
    const preguntaDia = prompt("Para saber el dia de la semana escribe 'si', sino, ingresar cualquier cosa ")

    if (preguntaDia === "si"){
        console.log("hoy es: " + sacarDiaSemana())
    } else {
        alert("seguimos con el siguiente paso")
    }
    
}
// termina la primer parte del usuario
const persona = new Persona()
const nombre = persona.nombre()
const apellido = persona.apellido()
const edad = persona.edad()
console.log("Bienvenido " + nombre + " " + apellido )
alert("Bienvenido " + nombre + " " + apellido )
preguntarDia()
alert("A continuación usted debe ingresar un tipo de cambio y un monto")


// conversor de divisa dolar-peso
class Conversor {
    constructor(){
    this.opcion1
    this.opcion2
    this.resultado}

    opciones() {
        let dolar = 550

        let opcion = prompt("Opcion 1: dolar a pesos  Opcion 2: pesos a dolar");
    
        while (opcion != 1 && opcion != 2) {
            console.error("error, reingrese");
            opcion = prompt("Reingrese solo el numero, si opcion 1 (Dolar a peso) u opcion 2 (peso a dolar)");
        }
    
        if (opcion == 1) {
            
            alert("Usted eligió la conversión de Dolar a Peso");
    
            this.opcion1 = prompt("Ingrese una cantidad de Dolares para convertir a Pesos: ");
    
            while (isNaN(Number(this.opcion1))) {
                console.error("error, reingrese");
                this.opcion1 = prompt("Reingrese solo numeros");
            }
    
            alert("en la consola le aparecerá la conversión realizada")

            this.resultado = this.opcion1 * dolar;
            console.log("La cantidad de dolares : " + this.opcion1 + " convertida a pesos es de: " + this.resultado.toFixed(2) + ", el día: " + sacarDiaSemana() );
    
    
        } else if (opcion == 2) {

            alert("Usted eligió la conversión de Peso a Dolar");
    
            this.opcion2 = prompt("Ingrese una cantidad de Pesos para convertir a Dolares: ");
    
            while(isNaN(Number(this.opcion2))) {
                console.error("error, reingrese");
                this.opcion1 = prompt("Reingrese solo numeros");
            }
    
            alert("en la consola le aparecerá la conversión realizada")
    
            this.resultado = this.opcion2 / dolar;
            console.log("La cantidad de pesos : " + this.opcion2 + " convertida a dolares es de: " + this.resultado.toFixed(2) + ", el día: " + sacarDiaSemana() );
        }
    }
}

const conversor = new Conversor()
conversor.opciones();

console.log('opcion1: ', conversor.opcion1);
console.log('opcion2: ', conversor.opcion2);

// historial del usuario ingresado
const arrayHistorial = [];

arrayHistorial.push({ 
    Nombre: nombre,
    Apellido: apellido,
    Edad: edad,
    Resultado: conversor.resultado,
    Dia: sacarDiaSemana()
})

console.log(arrayHistorial)

const encontrarNombre = arrayHistorial.map((i) => i.Nombre)
console.log(encontrarNombre)