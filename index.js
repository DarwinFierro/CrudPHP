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
    auth
      .signInWithPopup(provider)
      .then(function (result) {
        $.post(
          "controller/usuario.php?op=accesoSocial",
          { usu_email: result.user.email },
          function (data) {
            if (data == 0) {
              $("#lblMensaje").hide();
              $("#lblError").hide();
              $("#lblRegistro").show();
            } else {
              localStorage.setItem("loggedIn", "true");
              window.open("http://localhost:80/CrudPHP/view/home/", "_self");
            }
          }
        );
      })
      .catch(function (error) {
        console.log(error);
      });
});

function createSession(username) {
  $.ajax({
    url: "config/session.php?action=create",
    method: "POST",
    data: { username: username },
    success: function () {
      // La sesión se creó exitosamente
      console.log("Sesión creada para el usuario: " + username);
    },
    error: function () {
      // Error al crear la sesión
      console.log("Error al crear la sesión");
    }
  });
}

function init() {
}

$(document).ready(function () {
  $("#lblMensaje").hide();
  $("#lblError").hide();
  $("#lblRegistro").hide();
});

$(document).on("click", "#btn-login", function () {
  var usu_email = $("#InputEmail").val();
  var usu_pass = $("#InputPassword").val();
  if (usu_email == "" || usu_pass == "") {
    $("#lblMensaje").show();
    $("#lblError").hide();
  } else {
    $.post(
      "controller/usuario.php?op=acceso",
      { usu_email: usu_email, usu_pass: usu_pass },
      function (data) {
        if (data == 0) {
          $("#lblMensaje").hide();
          $("#lblError").show();
        } else {
          createSession(usu_email);
          window.open("http://localhost:80/CrudPHP/view/home/", "_self");
        }
      }
    );
  }
});

init();
