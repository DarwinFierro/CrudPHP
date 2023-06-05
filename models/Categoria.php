<?php
class Categoria extends Conectar
{
    public function get_categoria()
    {
        $conectar = parent::conexion();
        parent::set_names();
        $sql = "SELECT * from tm_categoria where est=1";
        $sql = $conectar->prepare($sql);
        $sql->execute();
        return $resultado = $sql->fetchAll();
    }
}

?>