const {Router} = require("express");
const router1 = Router();

const {createIndicador, getIndicador, getIndicator, deleteIndicador, updateIndicador} = require("../controller/indicador.controller.js")

router1.route("/")

    .get(getIndicador)
    .post(createIndicador)

router1.route("/:id")
    .get(getIndicator)
    .delete(deleteIndicador)
    .put(updateIndicador)

module.exports = router1;