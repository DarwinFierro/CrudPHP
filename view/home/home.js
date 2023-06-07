function checkSession() {
  $.ajax({
    url: "../../config/session.php?action=check",
    method: "GET",
    success: function () {
    },
    error: function () {
      // Redirige al usuario a la página de inicio de sesión
      window.location.href = "http://localhost:80/CrudPHP/";
    }
  });
}

function init() {
}



$(document).ready(function () {
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