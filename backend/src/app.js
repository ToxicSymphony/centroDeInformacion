//Configuracion del servidor

const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose")

mongoose.set("strictQuery", false)
//se especifica la configuracion

app.set("port",process.env.PORT || 4000);

//middlewares(el servidor debe pasar primero por aqui para que las peticiones puedan viajar por la ruta)

app.use(cors());
app.use(express.json())

//rutas 

app.get("/", (req,res) =>{
    res.send("Hola welcome to my api")
})

//ruta para la api 
app.use("/api/usuarios", require("./routes/usuario.js"))
app.use("/api/indicadores", require("./routes/indicador.js"))

module.exports = app;
