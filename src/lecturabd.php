<?php
$c = new mysqli("localhost", "root", "1234", "avesgaditanas");
$c -> query("SET NAMES utf8");
$salida = array();
$resultado = $c -> query("SELECT nombrecomun, num_ejemplares, nombre, fecha 
                        FROM avistamiento, ave, comarca
                        WHERE avistamiento.id_comarca = comarca.id 
                            AND avistamiento.id_sp = ave.id");
$salida = $resultado -> fetch_all(MYSQLI_ASSOC);
echo json_encode($salida);
$c -> close();
?>