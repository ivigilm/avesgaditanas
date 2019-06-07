<?php

$nombrepersona = $_POST['nombrepersona'];
$email = $_POST['email'];
$especie = $_POST['especie'];
$comarca = $_POST['comarca'];
$ejemplares = $_POST['ejemplares'];
$fechavista = $_POST['fechavista'];
$descripcion = $_POST['descripcion'];

$c = new mysqli("localhost", "root", "", "avesgaditanas");
$c -> query("SET NAMES utf8");
$resultado = $c->query("INSERT INTO avistamiento (
    id_sp,
    id_comarca,
    num_ejemplares,
    fecha,
    descripcion,
    autor,
    emailautor
)
VALUES (
    '$especie',
    '$comarca',
    '$ejemplares',
    '$fechavista',
    '$descripcion',
    '$nombrepersona',
    '$email'
)");
$c->close();

?>