window.onload = function() {
    
    document.getElementById('infosp').style.display = 'none';
    
    mapajs = M.map({
        container: 'contenedormapa'
    });

    mapajs.on(M.evt.COMPLETED, () => { mapajs.removeControls('panzoom'); });

    const poligonoRelleno = new M.style.Polygon({
        fill: {
            color: 'rgb(230, 173, 173)',
            opacity: 0.6,
        },
        stroke: {
            color: 'black',
            width: 1,
            opacity: 1,
        }
    });

    const poligonoRellenoText = new M.style.Polygon({
        fill: {
            color: 'rgb(230, 173, 173)',
            opacity: 0.6,
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
    
        comarcasAndaluzas.on(M.evt.SELECT_FEATURES, (feature) => leeEspeciesDeZona(feature[0].getAttributes().nombre));
        
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