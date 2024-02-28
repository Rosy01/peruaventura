<?php

    include 'conexion1.php';

    $nombre_completo = $_POST['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    $query = "INSERT INTO usuarios(nombre,correo,usuario,contra)
    VALUES('$nombre_completo','$correo','$usuario','$contrasena')";

    $ejecutar =mysqli_query($conexion,$query);

    if($ejecutar){
        echo'
        <script>
        alert("creo su cuenta correctamente");
        window.location = "../index.php";
        </script>
        ';
    }else{
        echo'
        <script>
        alert("intentalo denuevo");
        window.location = "../index.php";
        </script>
        ';
    }

    myqli_close($conexion);

?>