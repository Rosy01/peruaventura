<?php

    session_start();

    include 'conexion1.php';

    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    $validar_login = mysqli_query($conexion,"SELECT * FROM usuarios WHERE 
    correo='$correo' and contra='$contrasena'");

    if(mysqli_num_rows($validar_login)>0){
        $_SESSION['usuario'] = $correo;
        header("location: ../index.html");
        exit;

    }else{
        echo'
        <script>
        alert("Usuario o Contraseña invalido, vuelve a intentarlo");
        window.location = "../index.php";
        </script>
        ';
    }
    exit;


?>