<?php
$idzona = $_POST['idzona'];
$c = new mysqli("localhost", "root", "", "avesgaditanas");
$c -> query("SET NAMES utf8");
$salida = array();
$resultado = $c -> query("SELECT DISTINCT ave.id, ave.nombrecomun, foto 
                        FROM avistamiento, ave, comarca
                        WHERE avistamiento.id_comarca = comarca.id
                            AND ave.id = avistamiento.id_sp 
                            AND comarca.id = $idzona");
$salida = $resultado -> fetch_all(MYSQLI_ASSOC);
echo json_encode($salida);
$c -> close();
?>