// Muestra mosaico con las especies
function leeEspecies() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const especies = JSON.parse(xhr.responseText);
            todasEspecies = especies;
            rellenaEspecies(especies);
        }
    }
    xhr.open("GET", "lecturasp.php", true);
    xhr.send();
}

function obtieneComarcasDeSp(infoEspecie) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log('xhr.text:');
            console.log(xhr.responseText);
            const comarcas = xhr.responseText;
            muestraInfoEspecie(infoEspecie, comarcas);
        }
    }
    xhr.open("POST", "zsdesp.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`especie=${infoEspecie.id}`);
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
        fotoAve.addEventListener('click', () => {obtieneComarcasDeSp(especies[i])});
        let nombreAve = document.createElement('span');
        nombreAve.innerHTML = especies[i].nombrecomun;
        nuevaAve.appendChild(fotoAve);
        nuevaAve.appendChild(nombreAve);
        nuevaAve.classList.add('avemosaico');
        mosaico.appendChild(nuevaAve);
    }
}

function muestraInfoEspecie(infoEspecie, comarcas) {
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
        container: 'mapasp',
        controls: []
    });    
    
    const poligonoRelleno = new M.style.Polygon({
        fill: {
            color: '#F00',
            opacity: 0.5,
        },
        stroke: {
            color: 'black',
            width: 1,
            opacity: 1,
        }
    });

    M.proxy(false);
    M.remote.get('./geodata/comarcascadiz.geojson').then(response => {
        const json = JSON.parse(response.text);
        const comarcasAndaluzas = new M.layer.GeoJSON({
            name: 'comarcasandaluzas',
            source: json,
        });

        mapajs.addLayers(comarcasAndaluzas);

        mapajs.on(M.evt.COMPLETED, () => {
            mapajs.removeControls('panzoom');
            comarcasAndaluzas.getFeaturesExtentPromise().then(extent => mapajs.setBbox(extent));
            const filteredFeatures = comarcasAndaluzas.getFeatures().filter((feature) => {
                return comarcas.includes(feature.getAttributes().nombre );
                // [id1, id2].includes(feature.getId()) // (feature.getId()) //
            });
            filteredFeatures.forEach((f) => {
                f.setStyle(poligonoRelleno);
            }); // id
        });
    });
    M.proxy(true);

/*     let promesa = new Promise(function(resolve, reject) {
        let comarcas = traeComarcas(infoEspecie.id);
        resolve(comarcas);
    });
    promesa.then(function(comarcas) {
    }); */
}