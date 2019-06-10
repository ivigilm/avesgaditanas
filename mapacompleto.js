window.onload = function() {
    
    mapajs = M.map({
        container: 'contenedormapa'
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
            extract: false,
        });
    
        comarcasAndaluzas.on(M.evt.SELECT_FEATURES, (feature) => {
            console.log((feature[0].getAttributes().nombre));
            // leeEspeciesDeZona(feature[0].getAttributes().nombre);
        });
        comarcasAndaluzas.on(M.evt.HOVER_FEATURES, (features) => {
            features[0].setStyle(poligonoRellenoText, true);
        });

        comarcasAndaluzas.on(M.evt.LEAVE_FEATURES, (features) => {
            features[0].setStyle(poligonoRelleno, true);
        });

        mapajs.addLayers(comarcasAndaluzas);

        mapajs.on(M.evt.COMPLETED, () => {
            comarcasAndaluzas.getFeaturesExtentPromise().then(extent => mapajs.setBbox(extent));
            comarcasAndaluzas.setStyle(poligonoRelleno);
        });
    });
    M.proxy(true);

    window.mapajs = mapajs;
}