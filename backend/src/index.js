require("dotenv").config()


const app = require("./app.js")
require("./dataBase.js")


// esta parte del codigo es para ejecutar el servidor

async function main(){
    await app.listen(app.get("port"));

    console.log("el servidor se esta ejecutando en el puerto", app.get("port"));
}

main();