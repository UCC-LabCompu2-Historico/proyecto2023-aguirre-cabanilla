/**
 * Suma los elementos al carrito
 * @method sumar_al_carrito
 * @param (string) id - El id de los elementos agregados al carrito
 * @return la suma total del carrito
 */
let total = 0; /** esta variable inicializa el carrito en 0*/

function sumar_al_carrito(id) {
    // Incrementa el total según el id del elemento seleccionado
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

    // Actualiza la interfaz mostrando el nuevo total en la etiqueta con el nombre "compra_total"
    document.getElementsByName("compra_total")[0].innerHTML = total;
}

/**
 * Limpia el valor del carrito
 * @method limpiar
 */
function limpiar() {
    // Restablece el total del carrito a 0
    total = 0;

    // Borra el contenido en la interfaz, estableciendo el HTML del primer elemento con nombre "compra_total" como una cadena vacía
    document.getElementsByName("compra_total")[0].innerHTML = "";
}


/**
 * Mensaje al presionar el boton para comprar
 * @method agradecimiento
 * @return mensaje
 */
function agradecimiento() {
    // Verifica si el total del carrito es igual a 0
    if (total == 0) {
        // Muestra una alerta indicando que se debe elegir un artículo antes de proceder
        alert("Primero elija un artículo");
    }

    // Verifica si el total del carrito no es igual a 0
    if (total != 0) {
        // Redirige a la página "inscripcion.html" si hay artículos en el carrito
        window.location.href = "inscripcion.html";
    }

    // Restablece el total del carrito a 0
    total = 0;

    // Borra el contenido en la interfaz, estableciendo el HTML del primer elemento con nombre "compra_total" como una cadena vacía
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
    // Verifica si el valor no es un número
    if (isNaN(valor)) {
        // Muestra una alerta indicando que se ingresó un valor inválido
        alert("Se ingresó un valor inválido");

        // Según el id, establece el valor del campo correspondiente en el formulario como una cadena vacía
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



/** Descripción: Animacion de canva
 * @method animarCorredor
 * @return
 */

let x = 0; // Inicializa la posición horizontal del corredor
let dx = 2; // Establece la velocidad de desplazamiento del corredor

function animarCorredor() {
    const canvas = document.getElementById("myCanvas"); // Obtiene el elemento canvas por su ID
    const ctx = canvas.getContext("2d"); // Obtiene el contexto 2D del canvas
    let img = new Image(); // Crea un nuevo objeto de imagen

    img.src = "imagenes/empuje.png"; // Establece la fuente de la imagen
    canvas.width = canvas.width; // Borra el contenido anterior en el canvas
    // Se define una función de devolución de llamada que se ejecuta cuando la imagen se carga correctamente.
    img.onload = function () {
        // Dibuja la imagen del corredor en el canvas en la posición horizontal actual (x) y vertical 0.
        ctx.drawImage(img, x, 0);
    }


    // Verifica si el corredor ha pasado el ancho del canvas
    if (x > canvas.width) {
        x = 0; // Reinicia la posición del corredor al inicio del canvas
    }

    x += dx; // Incrementa la posición horizontal del corredor según la velocidad de desplazamiento
}

/**
 * Verifica si la cadena contiene al menos un número.
 * @function contieneNumero
 * @param {string} cadena - Cadena de texto a verificar.
 * @returns {boolean} - Devuelve true si la cadena contiene al menos un número, de lo contrario, false.
 */
function contieneNumero(cadena) {
    // Utiliza una expresión regular para verificar si la cadena contiene al menos un dígito (número).
    return /\d/.test(cadena);
}
/**
 * Valida el nombre y apellido ingresados, mostrando una alerta si contienen números.
 * @function validartexto
 * @param {string} id - ID del campo de entrada de texto que se está validando.
 * @returns {void} - La función no retorna un valor específico, pero puede mostrar alertas y ajustar el contenido del campo de texto.
 */
function validartexto(id) {
    // Obtiene los valores ingresados para nombre y apellido
    var nombreIngresado = document.getElementById("nombre").value;
    var apellidoIngresado = document.getElementById("apellido").value;

    // Verifica si el nombre ingresado contiene números
    if (contieneNumero(nombreIngresado)) {
        // Muestra una alerta indicando que no se pueden ingresar números en el nombre
        alert("No puedes ingresar números en el nombre. Inténtalo de nuevo.");
        // Establece el valor del campo de nombre en el formulario como una cadena vacía
        document.formulario_inscripcion.nombre.value = " ";
    }
    // Si el nombre no contiene números, verifica si el apellido los contiene
    else if (contieneNumero(apellidoIngresado)) {
        // Muestra una alerta indicando que no se pueden ingresar números en el apellido
        alert("No puedes ingresar números en el apellido. Inténtalo de nuevo.");
        // Establece el valor del campo de apellido en el formulario como una cadena vacía
        document.formulario_inscripcion.apellido.value = " ";
    }
}
/**
 * Valida la presencia del símbolo @ (arroba) y al menos un punto en la dirección de correo electrónico.
 * @function validarArroba_punto
 * @param {string} valor - Valor de la dirección de correo electrónico a validar.
 * @returns {void} - La función no retorna un valor específico, pero puede mostrar alertas.
 */
function validarArroba_punto(valor) {
    // Verifica si la dirección de correo electrónico no contiene el símbolo @
    if (!valor.includes('@')) {
        // Muestra una alerta indicando que el texto debe contener el símbolo @ (arroba)
        alert("El texto debe contener el símbolo @ (arroba).");
    }
    // Si la dirección de correo electrónico contiene el símbolo @, verifica si también contiene al menos un punto
    else if (!valor.includes('.')) {
        // Muestra una alerta indicando que el texto debe contener al menos un punto
        alert("El texto debe contener un punto.");
    }
}
/**
 * Valida que ninguna casilla del formulario esté vacía antes de la inscripción.
 * @function validar_formulario
 * @returns {void} - La función no retorna un valor específico, pero puede mostrar alertas.
 */
function validar_formulario() {
    // Obtiene los valores ingresados en cada campo del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    var numero_telefono = document.getElementById("numero_telefono").value;
    var numero_tarjeta = document.getElementById("numero_de_tarjeta").value;
    var codigo_seguridad = document.getElementById("codigo_seguridad").value;
    var tipo_pago = document.getElementById("tipo_de_pago").value;

    // Verifica si alguna casilla del formulario está vacía
    if (nombre === '' || apellido === '' || edad === '' || email === '' || numero_telefono === '' || numero_tarjeta === '' || codigo_seguridad === '' || tipo_pago === '') {
        // Muestra una alerta indicando que ninguna casilla debe estar vacía
        alert("Ninguna casilla debe estar vacía");
    }
    // Si todas las casillas están llenas, muestra un agradecimiento y realiza una acción adicional (en este caso, mueve el nombre horizontalmente)
    else {
        // Muestra un agradecimiento al usuario por ayudar a crecer
        alert("Gracias por ayudarnos a crecer");
        // Obtiene nuevamente el valor del campo "nombre" y realiza una acción adicional (en este caso, mueve el nombre horizontalmente)
        var nombre = document.getElementById("nombre").value;
        mover_nombre_horizontalmente(nombre);
    }
}
/**
 * Mueve un nombre horizontalmente en el canvas.
 * @function mover_nombre_horizontalmente
 * @param {string} nombre - Texto que se moverá horizontalmente en el canvas.
 * @returns {void} - La función no retorna un valor específico, pero anima el texto en el canvas.
 */
function mover_nombre_horizontalmente(nombre) {
    // Establece los valores de los campos en el formulario como cadenas vacías
    document.getElementById("nombre").value = " ";
    document.getElementById("apellido").value = " ";
    document.getElementById("edad").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("numero_telefono").value = " ";
    document.getElementById("numero_de_tarjeta").value = " ";
    document.getElementById("codigo_seguridad").value = " ";
    document.getElementById("tipo_de_pago").value = " ";

    // Obtiene el elemento canvas por su ID y su contexto 2D
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Inicializar la posición horizontal y vertical del texto
    var x = -ctx.measureText(nombre).width; // Iniciar fuera del canvas para un efecto de entrada
    var y = canvas.height / 2;

    // Establecer intervalo para el movimiento horizontal
    var velocidadX = 2; // Ajustar la velocidad según preferencias

    // Configurar un intervalo para animar el texto horizontalmente
    var intervalo = setInterval(function () {
        // Limpiar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar el texto en la nueva posición
        ctx.font = "10pt Verdana";
        ctx.fillStyle = "white";
        ctx.fillText(nombre, x, y);

        // Actualizar la posición para el siguiente intervalo
        x += velocidadX;

        // Detener el movimiento después de cierta distancia (ajustar según necesidades)
        if (x > canvas.width) {
            clearInterval(intervalo);
        }
    }, 20); // Cambiar el valor para ajustar la velocidad del movimiento
}

