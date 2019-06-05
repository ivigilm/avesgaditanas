<?php
$c = new mysqli("localhost", "root", "", "avesgaditanas");
$c -> query("SET NAMES utf8");
$salida = array();
$resultado = $c -> query("SELECT id, nombre 
                        FROM comarca
                        ORDER BY comarca.nombre");
$salida = $resultado -> fetch_all(MYSQLI_ASSOC);
echo json_encode($salida);
$c -> close();
?>