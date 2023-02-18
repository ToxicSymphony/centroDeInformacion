const {Schema, model} = require("mongoose");

const indicadorSchema = new Schema({
    nombre: String,
    descripcion: String,
},
{
    timestamps: true
})

module.exports = model("indicador", indicadorSchema)
