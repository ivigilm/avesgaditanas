<?php
$idsp = $_POST['idsp'];
$c = new mysqli("localhost", "root", "", "avesgaditanas");
$c -> query("SET NAMES utf8");
$salida = array();
$resultado = $c -> query("SELECT DISTINCT comarca.id, comarca.nombre 
                        FROM avistamiento, ave, comarca
                        WHERE avistamiento.id_comarca = comarca.id
                            AND ave.id = avistamiento.id_sp 
                            AND ave.id = $idsp");
$salida = $resultado -> fetch_all(MYSQLI_ASSOC);
echo json_encode($salida);
$c -> close();
?>