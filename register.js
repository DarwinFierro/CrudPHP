const Config = {
  apiKey: "AIzaSyDQ484gOXlmbmjlHq5pyAqJlYATt9q9aYo",
  authDomain: "loginsocialmedia-34843.firebaseapp.com",
  projectId: "loginsocialmedia-34843",
  storageBucket: "loginsocialmedia-34843.appspot.com",
  messagingSenderId: "107343450838",
  appId: "1:107343450838:web:9a46ef87154872db5fef77",
  measurementId: "G-V5HSP7YDK4",
};

// Initialize Firebase
firebase.initializeApp(Config);

var auth = firebase.auth();

document.getElementById("btnLoginGoogle").addEventListener("click", function () {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(function (result) {
        $.post("controller/usuario.php?op=registro",{usu_nom: result.user.displayName, usu_email: result.user.email,usu_pass: 1234,},function (data) {
            if (data == 0) {
              Swal.fire({
                title: "Aceptado!",
                text: "Registro Correcto",
                icon: "sucess",
                confirmButtonText: "Ok",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.open("http://localhost:80/CrudPHP/", "_self");
                }
              });
            } else {
              Swal.fire("Observacion!", "Correo ya existe", "question");
            }
          }
        );
      })
      .catch(function (error) {
        console.log(error);
      });
});

  function checkSession() {
    // Realizar una solicitud AJAX para verificar la sesión en el servidor
    $.ajax({
      url: 'config/session.php?action=check',
      method: 'GET',
      success: function(response) {
        // Verificar la respuesta del servidor
        if (response === 'true') {
          window.location.href = 'http://localhost:80/CrudPHP/view/home/';
        } else {
          init();
        }
      },
      error: function() {
        // Manejar el error de la solicitud AJAX
        console.log('Error al verificar la sesión');
      }
    });
  }
function init() {}

$(document).ready(function () {
  checkSession()
  $("#lblMensaje").hide();
  $("#lblError").hide();
});

$(document).on("click", "#btn-registrar", function () {
  var usu_nom = $("#FirstName").val();
  var usu_email = $("#InputEmail").val();
  var usu_pass = $("#InputPassword").val();
  var rep_pass = $("#RepeatPassword").val();
  if (usu_nom == "" || usu_email == "" || usu_pass == "" || rep_pass == "") {
    Swal.fire("Error!", "Campos Vacios", "error");
  } else {
    if (usu_pass === rep_pass) {
      $.post(
        "controller/usuario.php?op=registro",
        { usu_nom: usu_nom, usu_email: usu_email, usu_pass: usu_pass },
        function (data) {
          if (data == 0) {
            Swal.fire({
              title: "Aceptado!",
              text: "Registro Correcto",
              icon: "sucess",
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {
                window.open("http://localhost:80/CrudPHP/", "_self");
              }
            });
          } else {
            Swal.fire("Observacion!", "Correo ya existe", "question");
          }
        }
      );
    } else {
      Swal.fire("Error!", "Contraseñas Incorrectas", "error");
    }
  }
});

init();
