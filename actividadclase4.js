alert("Bienvenido al conversor de Dolar a Peso y de Peso a Dolar")

function nombre(){
    let nombreUsuario = prompt("Ingrese su nombre")

    while (isFinite(nombreUsuario)){
        console.error("error, reingrese")
        nombreUsuario = prompt("reingrese el nombre, solo se admiten letras")

    }
    console.log(nombreUsuario)
    return nombreUsuario
}

function apellido(){
    let apellidoUsuario = prompt("Ingrese su apellido")

    while (isFinite(apellidoUsuario)){
        console.error("error, reingrese")
        apellidoUsuario = prompt("reingrese el nombre, solo se admiten letras")
    }
    console.log(apellidoUsuario)
    return apellidoUsuario
}

let Nombre = nombre()
let Apellido = apellido()
console.log("Bienvenido " + Nombre + " " + Apellido )
alert("A continuación usted debe ingresar un tipo de cambio y luego un monto")


function opciones() {
    let opcion1, opcion2;

    let Opcion = prompt("Opción 1 : Dolar a Pesos \nOpción 2 : Pesos a Dolar");

    while (Opcion != 1 && Opcion != 2) {
        console.error("error, reingrese");
        Opcion = prompt("Reingrese solo el numero, si opción | 1 | (Dolar a peso) u opción | 2 | (peso a dolar)");
    }

    if (Opcion == 1) {
        alert("Usted eligió la conversión de Dolar a Peso");

        opcion1 = prompt("Ingrese una cantidad de Dolares para convertir a Pesos: ");

        while (isNaN(opcion1) || opcion1 < 0 ) {

            alert("Error: Ingrese un número válido (no negativo)");
            
            opcion1 = prompt("Ingrese una cantidad de Dolares para convertir a Pesos: ");
        }   
        if ( opcion1 >= 0){

        alert("Pulsando `F12` se abre la consola donde le aparecerá la conversión realizada")

        console.log("La cantidad de : " + opcion1 + " USD, convertida a Pesos es de: " + opcion1 * 500 + " $")
        } 
    } else if (Opcion == 2) {
        alert("Usted eligió la conversión de Peso a Dolar");

        opcion2 = prompt("Ingrese una cantidad de Pesos para convertir a Dolares: ");

        while (isNaN(opcion2) || opcion2 < 0 ) {

            alert("Error: Ingrese un número válido (no negativo)");
            
            opcion2 = prompt("Ingrese una cantidad de Pesos para convertir a Dolares: ");
        }   

        if ( opcion2 >= 0){

        alert("Pulsando `F12` se abre la consola donde le aparecerá la conversión realizada")

        console.log("La cantidad de : " + opcion2 + " $, convertida a dolares es de: " + opcion2 / 500 + " USD")
        }
    }

    return { opcion1, opcion2 };
}

let opcionesSeleccionadas = opciones();



