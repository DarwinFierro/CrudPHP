<?php
class Producto extends Conectar
{
    public function get_producto()
    {
        $conectar = parent::conexion();
        parent::set_names();
        $sql = "SELECT 
        tm_producto.prod_id,
        tm_producto.prod_nom,
        tm_producto.prod_desc,
        tm_producto.prod_can,
        tm_producto.cat_id,
        tm_categoria.cat_nom 
        from tm_producto INNER JOIN tm_categoria on tm_producto.cat_id = tm_categoria.cat_id where tm_producto.est=1";
        $sql = $conectar->prepare($sql);
        $sql->execute();
        return $resultado = $sql->fetchAll();
    }
    public function get_producto_x_id($prod_id)
    {
        $conectar = parent::conexion();
        parent::set_names();
        $sql = "SELECT * from tm_producto where prod_id=?";
        $sql = $conectar->prepare($sql);
        $sql->bindValue(1, $prod_id);
        $sql->execute();
        return $resultado = $sql->fetchAll();
    }

    public function delete_producto($prod_id)
    {
        $conectar = parent::conexion();
        parent::set_names();
        $sql = "UPDATE tm_producto
                SET
                   est=0,
                   fech_elim=now()
                WHERE
                    prod_id = ?";
        $sql = $conectar->prepare($sql);
        $sql->bindValue(1, $prod_id);
        $sql->execute();
        return $resultado = $sql->fetchAll();
    }

    public function Insert_producto($prod_nom, $prod_desc, $prod_can, $cat_id)
    {
        $conectar = parent::conexion();
        parent::set_names();
        $sql = "INSERT INTO tm_producto (prod_id, prod_nom, prod_desc, prod_can, fech_crea, fech_modi, fech_elim, est, cat_id) VALUES (NULL, ?, ?, ?, now(), NULL, NULL, 1, ?);";
        $sql = $conectar->prepare($sql);
        $sql->bindValue(1, $prod_nom);
        $sql->bindValue(2, $prod_desc);
        $sql->bindValue(3, $prod_can);
        $sql->bindValue(4, $cat_id);
        $sql->execute();
        return $resultado = $sql->fetchAll();
    }

    public function Update_producto($prod_id,$prod_nom, $prod_desc, $prod_can, $cat_id)
    {
        $conectar = parent::conexion();
        parent::set_names();
        $sql = "UPDATE tm_producto
            SET
               prod_nom=?,
               prod_desc=?,
               prod_can=?,
               cat_id=?,
               fech_modi=now()
            WHERE
                prod_id = ?";
        $sql = $conectar->prepare($sql);
        $sql->bindValue(1, $prod_nom);
        $sql->bindValue(2, $prod_desc);
        $sql->bindValue(3, $prod_can);
        $sql->bindValue(4, $cat_id);
        $sql->bindValue(5, $prod_id);
        $sql->execute();
        return $resultado = $sql->fetchAll();
    }
}
?>