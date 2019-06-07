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

function muestraInfoEspecie(infoEspecie) {
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

    mapajs = M.map({
        container: 'mapasp'
    });    
    const comarcasAndaluzas = new M.layer.GeoJSON({
        name: 'comarcasandaluzas',
        url: 'http://geostematicos-sigc.juntadeandalucia.es/geoserver/tematicos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tematicos:comarcas&maxFeatures=50&outputFormat=application%2Fjson'
    });
    mapajs.addLayers(comarcasAndaluzas);

    document.getElementById('mapasp').appendChild(mapajs);

/*     let promesa = new Promise(function(resolve, reject) {
        let comarcas = traeComarcas(infoEspecie.id);
        resolve(comarcas);
    });
    promesa.then(function(comarcas) {
    }); */
}