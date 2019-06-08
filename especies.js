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

    const poligonoRellenoText = new M.style.Polygon({
        fill: {
            color: '#F00',
            opacity: 0.5,
        },
        stroke: {
            color: 'black',
            width: 1,
            opacity: 1,
        },
        label: {
            text: '{{nombre}}'
        }
    });


    M.proxy(false);
    M.remote.get('./geodata/comarcascadiz.geojson').then(response => {
        const json = JSON.parse(response.text);
        const comarcasAndaluzas = new M.layer.GeoJSON({
            name: 'comarcasandaluzas',
            source: json,
        });
 /*    
                comarcasAndaluzas.on(M.evt.HOVER_FEATURES, (features) => {
            features[0].setStyle(poligonoRellenoText, true);
        });

        comarcasAndaluzas.on(M.evt.LEAVE_FEATURES, (features) => {
            features[0].setStyle(poligonoRelleno, true);
        }); */

        mapajs.addLayers(comarcasAndaluzas);

        mapajs.on(M.evt.COMPLETED, () => {
            mapajs.removeControls('panzoom');
            comarcasAndaluzas.getFeaturesExtentPromise().then(extent => mapajs.setBbox(extent));
            const filteredFeatures = comarcasAndaluzas.getFeatures().filter((feature) => {
                return ['comarcas.15'].includes(feature.getId()); // (feature.getId()) //
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