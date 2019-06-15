<?php
$comarca = $_POST['comarca'];

$c = new mysqli("localhost", "root", "1234", "avesgaditanas");
$c -> query("SET NAMES utf8");
$salida = array();

$consulta = "SELECT DISTINCT ave.id, ave.nombrecomun, ave.nombrecientifico, ave.foto, ave.caracteristicas, ave.habitat
FROM ave, avistamiento, comarca
WHERE comarca.nombre = '" . $comarca . "' AND avistamiento.id_comarca = comarca.id AND ave.id = avistamiento.id_sp";

$resultado = $c -> query($consulta);

$salida = $resultado -> fetch_all(MYSQLI_ASSOC);
echo json_encode($salida);

$c -> close();
?>