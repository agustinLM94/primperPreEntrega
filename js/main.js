alert("Bienvenidos a la fiesta");

while (true) {
    let edad = prompt("Ingrese su edad");

    if (edad === null) {
        alert("Gracias, hasta luego");
        break;
    }

    edad = parseInt(edad);

    if (edad < 18) {
        alert("No puedes entrar a la fiesta, eres menor de edad");
    } else if (edad >= 18) {
        alert("Puedes ingresar a la fiesta");

        let ingreseNombre = prompt("Ingrese su nombre");
        let ingreseApellido = prompt("Ingrese apellido");

        function saludar(nombre, apellido) {
            alert("¡Bienvenido, " + nombre + " " + apellido + "!");
        }

        saludar(ingreseNombre, ingreseApellido);
        break;
    } else {
        alert("Edad inválida");
    }
}
