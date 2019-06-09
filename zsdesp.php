<?php
$especie = $_POST['especie'];
$c = new mysqli("localhost", "root", "", "avesgaditanas");
$c -> query("SET NAMES utf8");
$salida = array();
$resultado = $c -> query("SELECT DISTINCT nombre 
                        FROM comarca, ave, avistamiento
                        WHERE ave.id = especie
                            AND avistamiento.id_comarca = comarca.id 
                            AND avistamiento.id_sp = ave.id");
if ($resultado !== false) {
    $salida = $resultado -> fetch_all(MYSQLI_ASSOC);
    echo json_encode($salida);
} else {
    echo 'La consulta no devuelve datos.';
}

$c -> close();
?>