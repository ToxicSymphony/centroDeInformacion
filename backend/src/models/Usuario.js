const {Schema, model} = require("mongoose");

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    contraseña: String,
    correo: String,
    celular: Number,
    permiso: String,

},
{
    timestamps: true
})

module.exports = model("usuario", usuarioSchema)