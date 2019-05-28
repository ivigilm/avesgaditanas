window.onload = function() {

    mapajs = M.map({
        container: 'contenedormapa'
    });

    // Centramos el mapa en la provincia de Cádiz
    mapajs.setCenter(x, y);
    mapajs.setZoom(8);

    // Ampliamos a la provincia
    cuadricula = [x, x, x, x];

    mapajs.setBbox(cuadricula);
}

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