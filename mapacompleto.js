window.onload = function() {

    mapajs = M.map({
        container: 'contenedormapa'
    });
    
    const comarcasAndaluzas = new M.layer.GeoJSON({
        name: 'comarcasandaluzas',
        url: 'http://geostematicos-sigc.juntadeandalucia.es/geoserver/tematicos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tematicos:comarcas&maxFeatures=50&outputFormat=application%2Fjson'
    });

    mapajs.addLayers(comarcasAndaluzas);

    /* guardaCadiz();

    function guardaCadiz() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const comarcasAnd = JSON.parse(xhr.responseText);
                trataComarcas(comarcasAnd.features);
            }
        };
        xhr.open("GET", "geodata/comarcas.geojson");
        xhr.send();
    }

    function trataComarcas(andaluciaFeatures) {
        const comarcasCadiz = [];
        const p1 = new Promise(function(resolve) {
            andaluciaFeatures.forEach(function(feature) {
                if (feature.id === 'comarcas.15') {
                    comarcasCadiz.push(feature);
                }
            });
            resolve(comarcasCadiz);
        });
        
        p1.then(function(comarcasCadiz) {
            mapajs.addLayers(creaCapa(comarcasCadiz));
        });
    }

    function creaCapa(features) {
        return cadizLayer = new M.layer.GeoJSON({
            "name": "provinciacadiz",
            "type": "FeatureCollection",
            "features": features
        });
    } */
}



/*     const comarcasAndaluzas = new M.layer.GeoJSON({
        name: 'comarcasandaluzas',
        url: 'http://geostematicos-sigc.juntadeandalucia.es/geoserver/tematicos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tematicos:comarcas&maxFeatures=50&outputFormat=application%2Fjson'
    });

    const comarcasFeatures = comarcasAndaluzas.getFeatures();

    console.log(comarcasFeatures); */

    /**
     * Comarcas de Cádiz en este geojson:
     * 
     * Bahía de Cádiz
     * Campiña de Jerez <- Campiña gaditana
     * Campo de Gibraltar <- Estrecho de Gibraltar
     * Costa Noroeste de Cádiz <- Entorno de Doñana
     * La Janda
     * Sierra de Grazalema
     * 
     * Los Alcornocales se reparte entre Campo de Gibraltar y La Janda (5 -> 6 y 7)
     */

/*     const provincias = new M.layer.GeoJSON({
        name: 'provinciasandaluzas',
        url: 'http://geostematicos-sigc.juntadeandalucia.es/geoserver/tematicos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tematicos:Provincias&maxFeatures=50&outputFormat=application%2Fjson'
    }); */
 
//    const cadizFtr = new M.Feature('cadizfeature', JSON.parse(cadizFeature));

/*     const cadiz = new M.layer.GeoJSON({
        name: 'cadiz',
        source: {
            type: 'FeatureCollection',
            features: [JSON.parse(comarcascadiz).features],
        }
    }); */

    //mapajs.addLayers(cadiz);

/*     const cadizFeatur = new M.Feature("featureCadiz", cadizFeature);

    const cadiz = new M.layer.GeoJSON({
        name: 'cadiz',
        source: {
            type: 'FeatureCollection',
            features: [cadizFeatur],
        }
    });

    mapajs.addLayers(cadiz); */

/*
    guardaProvincias() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {

        }
        xhr.open("GET", "http://geostematicos-sigc.juntadeandalucia.es/geoserver/tematicos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=tematicos:Provincias&maxFeatures=50&outputFormat=application%2Fjson");
        xhr.send()
    } */


/*         const cadizLayer = new M.layer.GeoJSON({
            name: 'provinciacadiz',
            type: cadizGeoJ.type,
            features: cadizGeoJ.features
        });
        mapajs.addLayers(JSON.parse(cadizLayer)); */

    // mapajs.addLayers(cadiz);

    // Centramos el mapa en la provincia de Cádiz
    // mapajs.setCenter(x, y);
    // mapajs.setZoom(1);

    // Ampliamos a la provincia
    // cuadricula = [x, x, x, x];

    // mapajs.setBbox(cuadricula);

/* 
window.onload = function() {
    mapajs = M.map({
        container: 'contenedormapa',  
    });
} */

        // método 1 para añadir la capa KML
        // layers: ["KML*capaKML*geodata/cadiz.kml"]    
    // método 2 para añadir la capa KML
/*     mapajs.addKML(new M.layer.KML({
        url: "geodata/cadiz.kml",
        name: "capaKML",
        extract: false
    }));
    //método 3
    mapajs.addKML("KML*capaKML*geodata/cadiz.kml*false"); */

    // Centramos el mapa en la provincia de Cádiz
/*     mapajs.setCenter(x, y);
    mapajs.setZoom(8);

    // Ampliamos a la provincia
    cuadricula = [x, x, x, x];

    mapajs.setBbox(cuadricula); */

    /* El mapa se hace en 25830
    Ej. maxExtent: 0: 96388.1179, 3959795.9442, 621889.937, 4299792.107
    
    Las siguiente coordenadas (de OSM) están en 4326 
    cuadricula = [ 37.2561537, -6.5154295, 37.0010079, -5.7055633 ];
    
    37.2561537, -6.5154295,
    [37.0010079, -4.9801386],
    37.0010079, -5.7055633,
    [37.2561537, -4.9801386] */

/*     capa.addFeatures(miFeature);
map.addLayers(capa);
map.removeLayers(this.map.getGeoJSON);
capa.removeFeatures(capa.getFeatures());
map.setZoom(8);
map.setCenter([lng, lat]);
const capa = new M.layer.GeoJSON({ name: ‘capa1’, source: { type: ‘FeatureCollection’, features: [JSON.parse(geojson)] } });
 */