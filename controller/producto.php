<?php
require_once("../config/conexion.php");
require_once("../models/Producto.php");

$producto = new Producto();

switch ($_GET["op"]) {
    case 'listar':
        $datos = $producto->get_producto();
        $data = array();
        foreach ($datos as $row) {
            $sub_array = array();
            $sub_array[] = $row["prod_nom"];
            $sub_array[] = '<button type="button" onClick="editar(' . $row["prod_id"] . ');"  id="' . $row["prod_id"] . '" class="btn btn-info btn-circle"><i class="fas fa-info-circle"></i></div></button>';
            $sub_array[] = '<button type="button" onClick="eliminar(' . $row["prod_id"] . ');"  id="' . $row["prod_id"] . '" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></div></button>';
            $data[] = $sub_array;
        }
        $results = array(
            "sEcho" => 1,
            "iTotalRecords" => count($data),
            "iTotalDisplayRecords" => count($data),
            "aaData" => $data
        );
        echo json_encode($results);
        break;

    case 'guardaryeditar':
        $datos = $producto->get_producto_x_id($_POST["prod_id"]);
        if (empty($_POST["prod_id"])) {
            if (is_array($datos) == true and count($datos) == 0) {
                $producto->Insert_producto($_POST["prod_nom"]);
            }
        } else {
            $producto->Update_producto($_POST["prod_id"], $_POST["prod_nom"]);
        }
        break;
        
    case 'mostrar':
        $datos = $producto->get_producto_x_id($_POST["prod_id"]);
        if (is_array($datos) == true and count($datos) > 0) {
            foreach ($datos as $row) {
                $output["prod_id"] = $row["prod_id"];
                $output["prod_nom"] = $row["prod_nom"];
            }
        }
        break;

    case 'eliminar':
        $producto->delete_producto($_POST["prod_id"]);
        break;
}
?>