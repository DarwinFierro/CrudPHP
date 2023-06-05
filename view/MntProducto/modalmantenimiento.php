<div id="modalmantenimiento" class="modal fade bd-example-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="producto_form">
                <div class="modal-header">
                    <h4 class="modal-title" id="mdltitulo"></h4>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="prod_id" name="prod_id">

                    <div class="form-group">
                        <label class="form-label" for="cat_id">Categoria</label>
                        <select class="form-control" id="cat_id" name="cat_id"> 
                    </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="prod_nom">Nombre</label>
                        <input type="text" class="form-control" id="prod_nom" name="prod_nom" placeholder="Ingrese Nombre" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="prod_desc">Descripcion</label>
                        <textarea class="form-control" name="prod_desc" id="prod_desc" rows="3" placeholder="Ingrese Descripcion" required></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="prod_desc">Cantidad</label>
                        <input type="number" class="form-control" name="prod_can" id="prod_can" min="0">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-rounded btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="submit" name="action" id="#" value="add" class="btn btn-rounded btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>