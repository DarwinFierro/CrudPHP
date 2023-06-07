var tabla;

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
  $.post("../../controller/categoria.php?op=combo", function (data) {
    $("#cat_id").html(data);
  });
  tabla = $("#producto_data")
    .dataTable({
      aProcessing: true, //Activamos el procesamiento del datatables
      aServerSide: true, //Paginación y filtrado realizados por el servidor
      dom: "Bfrtip", //Definimos los elementos del control de tabla
      buttons: ["copy", "excel", "csv"],
      ajax: {
        url: "../../controller/producto.php?op=listar",
        type: "get",
        dataType: "json",
        error: function (e) {
          console.log(e.responseText);
        },
      },
      bDestroy: true,
      responsive: true,
      bInfo: true,
      iDisplayLength: 10, //Por cada 10 registros hace una paginación
      order: [[0, "asc"]], //Ordenar (columna,orden)
      language: {
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_ registros",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "Mostrando un total de _TOTAL_ registros",
        sInfoEmpty: "Mostrando un total de 0 registros",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
        sSearch: "Buscar:",
        sUrl: "",
        sInfoThousands: ",",
        sLoadingRecords: "Cargando...",
        oPaginate: {
          sFirst: "Primero",
          sLast: "Último",
          sNext: "Siguiente",
          sPrevious: "Anterior",
        },
        oAria: {
          sSortAscending:
            ": Activar para ordenar la columna de manera ascendente",
          sSortDescending:
            ": Activar para ordenar la columna de manera descendente",
        },
      },
    })
    .DataTable();
});

function guardaryeditar(e) {
  e.preventDefault();
  var formData = new FormData($("#producto_form")[0]);
  $.ajax({
    url: "../../controller/producto.php?op=guardaryeditar",
    type: "POST",
    data: formData,
    contentType: false,
    processData: false,
    success: function (datos) {
      $("#producto_form")[0].reset();
      $("#modalmantenimiento").modal("hide");
      $("#producto_data").DataTable().ajax.reload();

      swal.fire("Registro!", "El registro correctamente.", "success");
    },
  });
}

function eliminar(prod_id) {
  swal
    .fire({
      title: "CRUD",
      text: "¿Esta seguro de Eliminar el registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        $.post(
          "../../controller/producto.php?op=eliminar",
          { prod_id: prod_id },
          function (data) {}
        );
        $("#producto_data").DataTable().ajax.reload();
        swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
}

function editar(prod_id) {
  $("#mdltitulo").html("Editar Registro");
  $.post(
    "../../controller/producto.php?op=mostrar",
    { prod_id: prod_id },
    function (data) {
      data = JSON.parse(data);
      $("#prod_id").val(data.prod_id);
      $("#prod_can").val(data.prod_can);
      $("#cat_id").val(data.cat_id);
      $("#prod_nom").val(data.prod_nom);
      $("#prod_desc").val(data.prod_desc);
    }
  );
  $("#modalmantenimiento").modal("show");
}

$(document).on("click", "#btnNuevo", function () {
  $("#mdltitulo").html("Nuevo Registro");
  $("#producto_form")[0].reset();
  $("#prod_id").val("");
  $("#modalmantenimiento").modal("show");
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

init();