<?php
$c = new mysqli("localhost", "root", "", "avesgaditanas");
$c -> query("SET NAMES utf8");
$salida = array();
$resultado = $c -> query("SELECT * FROM ave ORDER BY ave.nombrecomun");
$salida = $resultado -> fetch_all(MYSQLI_ASSOC);
echo json_encode($salida);
$c -> close();
?>