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
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
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
