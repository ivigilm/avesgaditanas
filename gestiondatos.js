// leeBaseDatos();
// traeEspecies(2);
// traeComarcas(2);
let todasEspecies;

function leeAvisamientos() {
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

/* especies.html */

// Muestra mosaico con las especies
function leeEspecies() {
    let especies;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            especies = JSON.parse(xhr.responseText);
            todasEspecies = especies;
            rellenaEspecies(especies);
        }
    }
    xhr.open("GET", "lecturasp.php", true);
    xhr.send();
}

function rellenaEspecies(especies) {
    const mosaico = document.getElementById('mosaico'); 
    for (let i = 0; i < especies.length; i++) {
        let nuevaAve = document.createElement('div');
        let fotoAve = document.createElement('img');
        fotoAve.setAttribute('src', `images/${especies[i].foto}`);
        fotoAve.setAttribute('alt', `foto ${especies[i].nombrecomun}`);
        fotoAve.setAttribute('height', '100px');
        fotoAve.setAttribute('width', '100px');
        fotoAve.addEventListener('click', () => {muestraInfoEspecie(especies[i])});
        let nombreAve = document.createElement('span');
        nombreAve.innerHTML = especies[i].nombrecomun;
        nuevaAve.appendChild(fotoAve);
        nuevaAve.appendChild(nombreAve);
        nuevaAve.classList.add('avemosaico');
        mosaico.appendChild(nuevaAve);
    }
}

// destallesp.html PERO NO! es la misma especies.html con info de una especie

function muestraInfoEspecie(infoEspecie) {
    console.log(infoEspecie);
    document.getElementById('mosaico').innerHTML = `id: ${infoEspecie.id}<br/>
    nombrecomun: ${infoEspecie.nombrecomun}<br/>
    nombrecientifico: ${infoEspecie.nombrecientifico}<br/>
    foto: ${infoEspecie.foto}<br/>
    características: ${infoEspecie.caracteristicas}<br/>
    hábitat: ${infoEspecie.habitat}`;
    document.getElementById('mosaico').style.display = 'none';
    document.getElementById('infosp').style.display = 'block';
    document.getElementById('tituloespecie').innerHTML = infoEspecie.nombrecomun;        
    document.getElementById('caracteristicas').innerHTML = infoEspecie.caracteristicas;      
    document.getElementById('habitat').innerHTML = infoEspecie.habitat;
    let fotoAve = document.createElement('img');
    fotoAve.setAttribute('src', `images/${infoEspecie.foto}`);
    fotoAve.setAttribute('alt', `foto ${infoEspecie.nombrecomun}`);
    document.getElementById('fotosp').appendChild(fotoAve);

/*     let promesa = new Promise(function(resolve, reject) {
        let comarcas = traeComarcas(infoEspecie.id);
        resolve(comarcas);
    });
    promesa.then(function(comarcas) {
    }); */
}
/*         <div id="infosp">
                <div>
                    <div id="caracteristicas"></div>
                    <div id="fotosp"></div>
                </div>
                <div>
                    <div id="habitat"></div>
                    <div id="mapasp"></div>
                </div>
            </div>
*/

/* especiesdemizona.html */

function traeEspecies(idzona) {
    let especies;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            especies = JSON.parse(xhr.responseText);
            // muestraDatos(especies);
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