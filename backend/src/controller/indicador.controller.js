const indicadorCtrl = {}

const Indicador = require("../models/Indicador.js")

indicadorCtrl.getIndicador = async(req,res)=>{
    const indicadores = await Indicador.find()
    res.json(indicadores)
}

indicadorCtrl.createIndicador = async(req,res)=>{
    const {nombre, descripcion} = req.body
    const newIndicador = new Indicador({
        nombre: nombre,
        descripcion: descripcion
    })

    await newIndicador.save()
    res.json({message:"el indicador " + newIndicador.nombre + " ha sido guardado correctamente"})
}

indicadorCtrl.getIndicator = async(req,res)=>{
    const indicador = await Indicador.findById(req.params.id)
    res.json(indicador)
}

indicadorCtrl.deleteIndicador = async(req,res)=>{
    await Indicador.findByIdAndDelete(req.params.id)
    res.json({message:"El indicador ha sido eliminado correctamente"})
}

indicadorCtrl.updateIndicador = async(req,res)=>{
    const {nombre, descripcion} = req.body
    await Indicador.findByIdAndUpdate(req.params.id, {
        nombre,
        descripcion
    })
    
    res.json({message:"El indicador ha sido actualizado correctamente"})
}

module.exports = indicadorCtrl