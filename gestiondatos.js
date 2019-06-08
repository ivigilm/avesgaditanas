/* function leeAvisamientos() {
    let avistamientos;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            avistamientos = JSON.parse(xhr.responseText);
            muestraDatos(avistamientos);
        }
    }
    xhr.open("GET", "lecturabd.php", true);
    xhr.send();
}

function leeComarcas() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            comarcas = JSON.parse(xhr.responseText);
            muestraDatos(comarcas);
        }
    }
    xhr.open("GET", "lecturazonas.php", true);
    xhr.send();
}
 */


/* especiesdemizona.html */

function traeEspecies(idzona) {
    let especies;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            especies = JSON.parse(xhr.responseText);
            document.getElementById('mosaico').innerHTML = `<p>Especies presentes en la zona ${idzona}:</p>`;
            rellenaEspecies(especies);
        }
    }
    xhr.open("POST", "spdezona.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("idzona=" + idzona.toString());
}


/* detallesp.html */

function traeComarcas(id) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            return JSON.parse(xhr.responseText);
            // comarcas = JSON.parse(xhr.responseText);
            // muestraDatos(comarcas);
            // rellenaComarcas(comarcas);
        }
    }
    xhr.open("POST", "mapadesp.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("idsp=" + id.toString());
}

function rellenaComarcas(comarcas) {
    lista = document.createElement('ul');
    comarcas.forEach((comarca) => {
        elementoDeLista = document.createElement('li');
        elementoDeLista.innerHTML = comarca.nombre;
        lista.appendChild(elementoDeLista);
    });
    document.getElementById('comarcasdondeesta').appendChild(lista);
}

/* Testing */

function muestraDatos(datos) {
    console.log(datos);
}