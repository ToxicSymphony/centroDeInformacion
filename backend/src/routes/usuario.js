const {Router} = require("express");
const router = Router();

const {createUsuario, getUsuarios, getUsuario, deleteUsuario, updateUsuario} = require("../controller/usuario.controller.js")

router.route("/")

    .get(getUsuarios)
    .post(createUsuario)

router.route("/:id")
    .get(getUsuario)
    .delete(deleteUsuario)
    .put(updateUsuario)

module.exports = router;