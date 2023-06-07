function checkSession() {
  // Realizar una solicitud AJAX para verificar la sesión en el servidor
  $.ajax({
    url: '../../config/session.php?action=check',
    method: 'GET',
    success: function(response) {
      // Verificar la respuesta del servidor
      if (response === 'true') {
        // La sesión está activa, continúa cargando la página
        init();
      } else {
        // La sesión no está activa, redirige al usuario a la página de inicio de sesión
        window.location.href = 'http://localhost:80/CrudPHP/';
      }
    },
    error: function() {
      // Manejar el error de la solicitud AJAX
      console.log('Error al verificar la sesión');
    }
  });
}

function init() {
}



$(document).ready(function () {
  checkSession();
});

$(document).on("click", "#BotonCancelar", function () {
  $.ajax({
    url: '../../config/session.php?action=logout',
    method: 'GET',
    success: function() {
      // Redirigir al usuario a la página de inicio de sesión
      window.location.href = 'http://localhost:80/CrudPHP/';
    },
    error: function() {
      // Manejar el error de la solicitud AJAX
      console.log('Error al cerrar sesión');
    }
  });
});