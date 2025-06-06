class FacturasModelMemory {
    constructor() {
        this.Facturas = [
            {id: 1, numero: "00010", tipo: "A", monto: 1000, estado: "Pagada"},
            {id: 2, numero: "00011", tipo: "B", monto: 2000, estado: "Pendiente"},
            {id: 3, numero: "00012", tipo: "C", monto: 3000, estado: "Anulada"},
        ]
    }
        getFacturas = async () => {
        const allFacturas = await this.Facturas
        return allFacturas
    } 

        getFacturasByTipo = async (tipo) => {
            const facturas = await this.getFacturas()
            const facturasFiltradas = facturas.filter(factura => factura.tipo === tipo)
            
            return facturasFiltradas
        }

        getFacturasByEstado = async (estado) => {
            const facturas = await this.getFacturas()
            const facturasFiltradas = facturas.filter(factura => factura.estado === estado)
          
            return facturasFiltradas
        }

        postFacturas = async (factura) => {
            
            const facturas = await this.getFacturas()
            
            if (facturas.length <= 0) {
                factura.id = 1
            } else {
                
                factura.id = facturas[facturas.length -1].id + 1
            }
           
            facturas.push(factura)
            //Tengo que pasarlo en formato string de JSON USANDO STRINGIFY al txt tambien
            // await fs.promises.writeFile(this.path, JSON.stringify(facturas), "utf-8")
            console.log("POST", facturas)
            return factura
        }

}

export default FacturasModelMemory