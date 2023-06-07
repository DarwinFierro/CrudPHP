<?php
session_start();

function createSession($username){
  // Guarda el nombre de usuario en la sesión
  $_SESSION['username'] = $username;

  $_SESSION['expiryTime'] = 2 * 60; // Tiempo de expiración en segundos (en este caso, 2 minutos)

  // Establece la sesión como activa
  $_SESSION['loggedIn'] = true;
}
function checkSession() {
  // Verificar si existe una variable de sesión que indique que el usuario está autenticado
  if (isset($_SESSION['loggedIn']) && $_SESSION['loggedIn'] === true) {
    // La sesión está activa
    echo 'true';
  } else {
    // La sesión no está activa
    echo 'false';
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
    break;
}
?>