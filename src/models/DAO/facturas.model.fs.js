import fs from "fs"

class FacturasModelFS {
    constructor() {
        this.path = "facturas.txt"
    }
        getFacturas = async () => {
        const allFacturas = await fs.promises.readFile(this.path, "utf-8")
        console.log("GET", allFacturas)
        return JSON.parse(allFacturas) 
    } 

        getFacturasByTipo = async (tipo) => {
            const facturas = await this.getFacturas()
            const facturasFiltradas = facturas.filter(factura => factura.tipo === tipo)
            
            return JSON.parse(JSON.stringify(facturasFiltradas))
        }

        getFacturasByEstado = async (estado) => {
            const facturas = await this.getFacturas()
            const facturasFiltradas = facturas.filter(factura => factura.estado === estado)
          
            return JSON.parse(JSON.stringify(facturasFiltradas))
        }

        postFacturas = async (factura) => {
            const facturas = await this.getFacturas()
            if (facturas.length <= 0) {
                factura.id = 1
            } else {
                factura.id = facturas[facturas.length -1].id + 1
            }
            facturas.push(factura)
            await fs.promises.writeFile(this.path, JSON.stringify(facturas), "utf-8")
          
            return factura
        }

}

export default FacturasModelFS