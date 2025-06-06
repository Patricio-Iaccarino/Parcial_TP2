import FacturasModelMemory from '../models/DAO/facturas.model.js'
import FacturasModelFS from '../models/DAO/facturas.model.fs.js'
import validation from '../utils/validation.js'
import Factory from '../models/Factory.js'

class FacturasService {
    constructor() {
        //this.model = new FacturasModelMemory()
        //this.model = new FacturasModelFS()
        this.model = Factory.get(process.env.PERSISTENCE)
            }

    getFacturas = async () => {
        const allFacturas = await this.model.getFacturas()
        return allFacturas
    }

    getFacturasByTipo = async (tipo) => {
        const facturas = await this.model.getFacturas()
        const facturasFiltradas = facturas.filter(factura => factura.tipo === tipo)
        
        return facturasFiltradas
    }
    
    getFacturasByEstado = async (estado) => {
        const facturas = await this.model.getFacturas()
        const facturasFiltradas = facturas.filter(factura => factura.estado === estado)
       
        return facturasFiltradas
    }
    
    
    postFacturas = async (factura) => {
        const validateFactura = validation.schema.validate(factura)
        console.log(validateFactura)
        if (!validateFactura.error) {
            const postFacturas = await this.model.postFacturas(factura)
            return postFacturas
        } else {
            return validateFactura.error.toString()
        }
    }

}

export default FacturasService