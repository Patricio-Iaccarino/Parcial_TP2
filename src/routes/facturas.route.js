import FacturasController from '../controllers/facturas.controller.js'
import express from 'express'

class Router {
    constructor() {
        this.controller = new FacturasController()
        this.router = express.Router()
    }
    
    start() {
        //this.router + verbo + ruta + this.controlador
        this.router.get("/facturas", this.controller.getFacturas)
        this.router.get("/facturas/:tipo", this.controller.getFacturasByTipo)
        this.router.get("/facturas/estado/:estado", this.controller.getFacturasByEstado)
        this.router.post("/facturas", this.controller.postFacturas)

        return this.router
    }
}
export default Router