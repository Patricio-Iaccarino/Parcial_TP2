import FacturasModelMemory from "./DAO/facturas.model.js"
import FacturasModelFS from "./DAO/facturas.model.fs.js"

class Factory {
    static get(persistence) {
        if(persistence == 'fs') {
            console.log("Persistiendo en FileSystem")
            return new FacturasModelFS()
        }
        else {
            console.log("Persistiendo en memoria...")
            return new FacturasModelMemory()
        }
    }
    
}

export default Factory