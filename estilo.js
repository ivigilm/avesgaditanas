window.onload = function() {
    // Animación de título sobre las imágenes de sección
    let imgsanimadas = document.getElementsByClassName('contenedorimg');
    imgsanimadas[0].addEventListener('mouseover', togglePalabraImg);
    imgsanimadas[1].addEventListener('mouseover', togglePalabraImg);
    imgsanimadas[0].addEventListener('mouseout', togglePalabraImg);
    imgsanimadas[1].addEventListener('mouseout', togglePalabraImg);

    function togglePalabraImg(e) {
        let visibilidad = e.target.parentNode.parentNode.children[0].style.visibility;
        let opacidad = e.target.parentNode.parentNode.children[0].style.opacity;
         e.target.parentNode.parentNode.children[0].style.visibility = 
            visibilidad === 'hidden' ? 'visible' : 'hidden';
    }
}