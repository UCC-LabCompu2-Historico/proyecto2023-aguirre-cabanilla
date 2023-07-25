/**
 * Suma los elementos al carrito
 * @method sumar_al_carrito
 * @param (string) id - El id de los elementos agregados al carrito
 * @return la suma total del carrito
 */
let total = 0; /** esta variable inicializa el carrito en 0*/

function sumar_al_carrito(id) {
    if (id == "proteina") {
        total = total + 10000;
    } else if (id == "barras") {
        total = total + 5000;
    } else if (id == "ultramass") {
        total = total + 10000;
    } else if (id == "botella") {
        total = total + 2000;
    } else if (id == "kit") {
        total = total + 6000;
    }
    document.getElementsByName("compra_total")[0].innerHTML = total;
}


/**
 * Limpia el valor del carrito
 * @method limpiar
 */
function limpiar() {
    total = 0;
    document.getElementsByName("compra_total")[0].innerHTML = "";
}


/**
 * Mensaje al presionar el boton para comprar
 * @method agradecimiento
 * @return mensaje
 */
function agradecimiento() {
    if (total == 0) {
        alert("Primero elija un articulo");
    }
    if (total != 0) {
        alert("Gracias por su compra");
    }
    total = 0;
    document.getElementsByName("compra_total")[0].innerHTML = "";
}

/** DOCUMENTACION EN JAVASCRIPT
 * Descripción: validacion del valor agregado por el usuario
 * @method cambiarNumLet
 * @param {string} id - El id de inputs de codigo de seguridad, numero de tarjeta
 * @param {number} valor - el valor de los inputs de valores agregados
 * @return
 */
function cambiarNumLet(valor, id) {
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido");
        if (id == "numero_de_tarjeta") {
            document.formulario_inscripcion.numero_de_tarjeta.value = " ";
        } else if (id == "codigo_seguridad") {
            document.formulario_inscripcion.codigo_seguridad.value = " ";
        } else if (id == "numero_telefono") {
            document.formulario_inscripcion.tel.value = " ";
        } else if (id == "edad") {
            document.formulario_inscripcion.edad.value = " ";

        }
    }
}

/** Descripción: mostrar alerta
 * @method mostrarAlerta
 * @return
 */
function mostrarAlerta() {
    alert("Gracias por su inscripción !");
}


/** Descripción: Animacion de canva
 * @method animarCorredor
 * @return
 */
x = 0;
dx = 2;

function animarCorredor() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let img = new Image();

    img.src = "imagenes/empuje.png";
    canvas.width = canvas.width;
    img.onload = function () {
        ctx.drawImage(img, x, 0);
    }
    if (x > canvas.width) {
        x = 0;
    }
    x += dx;
}

function contieneNumero(cadena) {
    return /\d/.test(cadena);
}

function validartexto(id) {
    var nombreIngresado = document.getElementById("nombre").value;
    var apellidoIngresado = document.getElementById("apellido").value;

    if (contieneNumero(nombreIngresado)) {
        alert("No puedes ingresar números en el nombre. Inténtalo de nuevo.");
        document.formulario_inscripcion.nombre.value = " ";
    }
    else if (contieneNumero(apellidoIngresado)) {
        alert("No puedes ingresar números en el apellido. Inténtalo de nuevo.");
        document.formulario_inscripcion.apellido.value = " ";
    }

}
function validarArroba_punto(valor) {
    if (!valor.includes('@')) {
        alert("El texto debe contener el símbolo @ (arroba).");
    }else if (!valor.includes('.')) {
        alert("El texto debe contener un punto.");
    }
}

function validar_formulario(){
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var edad=document.getElementById("edad").value;
    var email=document.getElementById("email").value;
    var numero_telefono=document.getElementById("numero_telefono").value;
    var numero_tarjeta=document.getElementById("numero_de_tarjeta").value;
    var codigo_seguridad=document.getElementById("codigo_seguridad").value;
    var tipo_pago=document.getElementById("tipo_de_pago").value;


    if ((nombre === '' || apellido === '' || edad === '' || email=== '' || numero_telefono === ''|| numero_tarjeta=== '' || codigo_seguridad=== '' || tipo_pago==='')) {
        alert("Ninguna casilla debe estar vacía");
    }
    else{
        alert("Gracias por su inscripcion")
    }

}

