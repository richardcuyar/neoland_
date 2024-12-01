const validarProducto = (req, res, next)=>{
    const {name, precio} = req.body

    if( !name || typeof name !== 'string') {
        return res.status(400).json({error: 'Nombre del producto invalido'})
    }
    if ( !precio || typeof name !== 'number' || precio <0 ) {
        return res.status(400).json({error: 'Precio del producto es invalido'})
}
next()

}

module.exports = validarProducto