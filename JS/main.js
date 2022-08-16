//Se verifica la edad del usuario (mayor de 18 años)
let edad;
while (true) {
    edad = prompt("Ingresa tu edad")
    if (parseInt(edad) < 18){
        alert("Para calcular las cuotas de un prestamo debes ser mayor de edad")
    } else if (edad==="") {
        alert("Para acceder primero debes ingresar tu edad!")
    } else {
        break
    }
}
//Mensaje de bienvenida si edad >=18
Swal.fire(
    'Bienvenido!',
    'Se verifico correctamente tu edad',
    'success'
)


//COMIENZO DE LA APP DE PRESTAMOS

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidad = document.getElementById("cantidad");
let interes = document.getElementById("interes");
let cuotas = document.getElementById("cuotas");
let mostrar= document.getElementById("mostrar");
let mostrar2= document.getElementById("mostrar2")
let prestamosPD= document.getElementById("prestamosPD")

//
function calculoPrestamo(){
    let interesEntero= interes.value/100;
    let cantidadPagar = ((parseInt(cantidad.value) * interesEntero) + parseInt(cantidad.value)) / parseInt(cuotas.value);
    console.log("Vas a pagar " + cuotas.value + " cuotas de $" + cantidadPagar);
    mostrar.innerHTML= ("Vas a pagar " + cuotas.value + " cuotas de $" + cantidadPagar);
}


//
function mostrar_inputs(){
    let datosUsuario = ["Los datos ingresados son: " + "<br>" + "Nombre: " + nombre.value+ "<br>" + "Apellido: " + apellido.value + "<br>" + "Mail: " + mail.value + "<br>" + "Cantidad de dinero: " + cantidad.value + "<br>" + "Tasa de interés: " + interes.value + "%" + "<br>" + "Cuotas: " + cuotas.value];
    console.log(datosUsuario);
    mostrar2.innerHTML=datosUsuario;
}


//Funcion para cargar los datos de los usuarios guardados en archivo JSON

function cargarDatos(){
    fetch("../JSON/datos.json")
        .then(respuesta => respuesta.json())
        .then((respuesta) => {
        prestamosPD.innerHTML=(("<br> Lista de prestamos disponibles: <br> <br>" + JSON.stringify(respuesta)))
        })
}










