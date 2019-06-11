<?php
$comarca = $_POST['comarca'];
$c = new mysqli("localhost", "root", "1234", "avesgaditanas");
$c -> query("SET NAMES utf8");
$salida = array();
$resultado = $c -> query("SELECT DISTINCT ave.id, nombrecomun, nombrecientifico, foto, caracteristicas, habitat
                        FROM avistamiento, ave, comarca
                        WHERE avistamiento.id_comarca = comarca.id
                            AND ave.id = avistamiento.id_sp 
                            AND comarca.nombre = $comarca");

if ($resultado !== false) {
    $salida = $resultado -> fetch_all(MYSQLI_ASSOC);
    echo json_encode($salida);
} else {
    echo 'La consulta no devuelve datos.';
}

$c -> close();
?>