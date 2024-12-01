const {nameValidator} = require('../utils/validator')


const validarProducto = (req, res, next)=>{
    const {nombre, email} = req.body
    const isValidName = nameValidator(nombre)
    if (!isValidName) return res.status(400).json({error: 'El nombre del usuario es invalido'})
    if (!email || !email.includes('@') || typeof email === 'string' ) return res.status
     


}
