<?php
session_start();

function createSession($username){
  // Guarda el nombre de usuario en la sesión
  $_SESSION['username'] = $username;

  $_SESSION['expiryTime'] = 2 * 60; // Tiempo de expiración en segundos (en este caso, 2 minutos)

  // Establece la sesión como activa
  $_SESSION['loggedIn'] = true;
}

function checkSession(){
  if (!isset($_SESSION['loggedIn'])) {
    // Redirige al usuario a la página de inicio de sesión
    header("Location: http://localhost:80/CrudPHP/");
    exit;
  }
}

function destroySession(){
  // Elimina todas las variables de sesión
  $_SESSION = array();

  // Destruye la sesión
  session_destroy();
}

switch ($_GET['action']) {
  case 'create':
    createSession($_POST["username"]);
    break;
  case 'check':
    checkSession();
    break;
  case 'logout':
    destroySession();
}
?>