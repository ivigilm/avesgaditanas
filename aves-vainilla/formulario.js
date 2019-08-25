/* CREACIÓN DE SELECT */
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        especies = JSON.parse(xhr.responseText);
        crearOpcionesSp(especies);
    }
}
xhr.open("GET", 'lecturasp.php', true);
xhr.send();

var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function() {
    if (xhr2.readyState === 4 && xhr2.status === 200) {
        comarcas = JSON.parse(xhr2.responseText);
        creaOpcionesComarca(comarcas);
    }
}
xhr2.open("GET", 'lecturazonas.php', true);
xhr2.send();

function crearOpcionesSp(especies) {
    especies.forEach((sp) => {
        var nuevaOpcion = document.createElement('option');
        nuevaOpcion.setAttribute('value', sp.id);
        nuevaOpcion.innerHTML = sp.nombrecomun;
        document.getElementById('especie').appendChild(nuevaOpcion);
    });
}

function creaOpcionesComarca(comarcas) {
    comarcas.forEach((comarca) => {
        var nuevaOpcion = document.createElement('option');
        nuevaOpcion.setAttribute('value', comarca.id);
        nuevaOpcion.innerHTML = comarca.nombre;
        document.getElementById('comarca').appendChild(nuevaOpcion);
    });
}

/* COMPROBACIÓN DE DATOS */

function nombreContribuyente() {
	if(document.getElementById('nombrepersona').value == ""){
		document.getElementById('errornombre').innerHTML = "&nbsp; El nombre no puede estar vacío.";
		document.getElementById('nombrepersona').focus();
	}else{
		document.getElementById('errornombre').innerHTML = "";
	}
}

function correo() {
	var emailintroducido = document.getElementById('email').value;
	var regex = /.+\@.+\..+/;
	if(!(regex.test(emailintroducido))){
		document.getElementById('erroremail').innerHTML = "&nbsp; El email debe ser válido.";
		document.getElementById('email').focus();
	}else{
		document.getElementById('erroremail').innerHTML = "";
	}
}

// FALTA COMPROBAR FECHA GREGORIANA
function compruebaFecha() {
    const fecha = document.getElementById('fechavista').value;
    dd = fecha.substring(0, 2);
    mm = fecha.substring(3, 5);
    aaaa = fecha.substring(6);
    esFecha = new Date(aaaa, mm, dd);
    if (esFecha instanceof Date && !isNaN(esFecha) && fecha.length === 10) {
        document.getElementById('errorfecha').innerHTML = '';
    } else {
        document.getElementById('errorfecha').innerHTML = 'Fecha inválida.';
    }
}

function compruebaSp() {
    if (document.getElementById('especie').value === 'x') {
        document.getElementById('errorespecie').innerHTML = 'Debes elegir una especie.';
    } else {
     document.getElementById('errorespecie').innerHTML = '';
    }
}

function compruebaComarca() {
    if (document.getElementById('comarca').value === 'x') {
        document.getElementById('errorcomarca').innerHTML = 'Debes elegir una comarca.';
    } else {
     document.getElementById('errorcomarca').innerHTML = '';
    }
}

var aleatorio1 = Math.floor((Math.random() * 9) + 1);;
var aleatorio2 = Math.floor((Math.random() * 9) + 1);;
var suma = aleatorio1 + aleatorio2;;

window.onload = function sumainicio(){
	document.getElementById('operacion').innerHTML += String(aleatorio1) + ' + ' + String(aleatorio2);
}

function sumatorio(){
	if(document.getElementById('captcha').value != suma){
		document.getElementById('errorcaptcha').innerHTML = "Respuesta incorrecta.";
		document.getElementById('captcha').focus();
	}else{
		document.getElementById('errorcaptcha').innerHTML = "";
	}
}

/* ENVÍO DE DATOS (CREACIÓN DE REGISTRO AVISTAMIENTO) */

function registraAvistamiento(nombrepersona, email, especie, comarca, ejemplares, fechavista, descripcion) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.open("POST", "introducciondato.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`
    nombrepersona=${nombrepersona}
    &email=${email}
    idsp=${especie}
    &idcomarca=${comarca}
    &numaves=${ejemplares}
    &fecha=${fechavista}
    &descripcion=${descripcion}`);
}