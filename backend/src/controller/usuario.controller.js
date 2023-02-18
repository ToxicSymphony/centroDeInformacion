const usuarioCtrl = {}

const Usuario = require("../models/Usuario.js")

usuarioCtrl.getUsuarios = async(req,res)=>{
     const usuarios = await Usuario.find()
     res.json(usuarios)
}

usuarioCtrl.createUsuario = async(req,res)=>{
    const {nombre, apellido, contraseña, correo, celular, permiso} = req.body
    const newUsuario = new Usuario({
        nombre: nombre,
        apellido: apellido,
        contraseña: contraseña,
        correo: correo,
        celular: celular,
        permiso: permiso,
    })

    await newUsuario.save()
    res.json({message:"el usuario "+ newUsuario.nombre + " ha sido guardado correctamente"})
}

usuarioCtrl.getUsuario = async(req,res)=>{
    const usuario = await Usuario.findById(req.params.id)
    res.json(usuario)
}

usuarioCtrl.deleteUsuario = async(req,res)=>{
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({message:"El usuario ha sido eliminado correctamente"})
}

usuarioCtrl.updateUsuario = async(req,res)=>{
    const {nombre, apellido, contraseña, correo, celular, permiso} = req.body
    await Usuario.findByIdAndUpdate(req.params.id, {
        nombre,
        apellido,
        contraseña,
        correo,
        celular,
        permiso

    })
    
    res.json({message:"El usuario ha sido actualizado correctamente"})
}

module.exports = usuarioCtrl