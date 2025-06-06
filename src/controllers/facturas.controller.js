import FacturasService from '../services/facturas.service.js'

class FacturasController {
    constructor() {
        this.service = new FacturasService()
    }

    getFacturas = async (req, res) => {
        const allFacturas = await this.service.getFacturas()
        console.log("Recibiendo: ", allFacturas)
        
        res.send(allFacturas)
    }

    getFacturasByTipo = async (req, res) => {
        const { tipo } = req.params
        const facturasFiltradas = await this.service.getFacturasByTipo(tipo)
        res.send(facturasFiltradas)
    }

    getFacturasByEstado = async (req, res) => {
        const { estado } = req.params
        const facturasFiltradas = await this.service.getFacturasByEstado(estado)
        res.send(facturasFiltradas)
    }

    postFacturas = async (req, res) => {
        const factura = req.body
        const data = await this.service.postFacturas(factura)
        res.send(data)
    }

}

export default FacturasController