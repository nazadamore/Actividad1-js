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
alert("A continuación usted debe ingresar un tipo de cambio y un monto")


function opciones() {
    let opcion1, opcion2;

    let Opcion = prompt("Opcion 1: dolar a pesos/nOpcion 2: pesos a dolar");

    while (Opcion != 1 && Opcion != 2) {
        console.error("error, reingrese");
        Opcion = prompt("Reingrese solo el numero, si opcion 1 (Dolar a peso) u opcion 2 (peso a dolar)");
    }

    if (Opcion == 1) {
        alert("Usted eligió la conversión de Dolar a Peso");

        opcion1 = prompt("Ingrese una cantidad de Dolares para convertir a Pesos: ");

        alert("en la consola le aparecerá la conversión realizada")

        console.log("La cantidad de dolares : " + opcion1 + "convertida a pesos es de: " + opcion1 * 500)

    } else if (Opcion == 2) {
        alert("Usted eligió la conversión de Peso a Dolar");

        opcion2 = prompt("Ingrese una cantidad de Pesos para convertir a Dolares: ");

        alert("en la consola le aparecerá la conversión realizada")

        console.log("La cantidad de pesos : " + opcion2 + "convertida a dolares es de: " + opcion2 / 500)
    }

    return { opcion1, opcion2 };
}

let opcionesSeleccionadas = opciones();
console.log(opcionesSeleccionadas.opcion1);
console.log(opcionesSeleccionadas.opcion2);



