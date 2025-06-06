import Joi from "joi"

const schema = Joi.object ({

    id: Joi.number().integer().min(1),
    numero: Joi.string().pattern(/^\d{5}$/).required(),
    tipo: Joi.string().valid("A", "B", "C").required(),
    monto: Joi.number().integer().min(0).required(),
    estado: Joi.string().valid("Pagada", "Pendiente", "Anulada").required(),

})

export default {
    schema
}    
