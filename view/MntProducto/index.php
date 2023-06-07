<!DOCTYPE html>
<html lang="es">

<head>
    <?php require_once("../../mainHeader.php"); ?>
    <title>Mantenimiento de productos</title>
</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

    <!-- Sidebar -->
        <?php require_once("../../sideBar.php"); ?>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <?php require_once("../../topbar.php"); ?>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <!-- Page Heading -->
                    <h1 class="h3 mb-4 text-gray-800">Producto</h1>
                    <p>Desde esta ventana podra dar mantenimiento a productos</p>

                    <div class="br-pagebody">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Mantenimiento de Producto</h6>
                            </div>
                            <button id="btnNuevo" class="btn btn-facebook btn-block">Nuevo Registro</button>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="producto_data" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Categoria</th>
                                                <th>Nombre</th>
                                                <th>Descripcion</th>
                                                <th>Cantidad</th>
                                                <th>Editar</th>
                                                <th>Eliminar</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <?php require_once("../../footer.php"); ?>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" id="BotonCancelar">Logout</a>
                </div>
            </div>
        </div>
    </div>

    <?php require_once("modalmantenimiento.php"); ?>

    <?php require_once("../../mainJs.php"); ?>

    <script src="mntproducto.js"></script>

</body>

</html>