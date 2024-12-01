const fs = require('fs')
const path = require ('path')


const productosPath = path.join(__dirname, '../data/productos.json')


const leerProductos =()=>{
    const data = fs.readFileSync(productosPath, 'utf-8')
    return JSON.parse(data)
}

const listarProductos =(req, res)=>{
    const productos = leerProductos
    res.json(productos)
}


const listarProducto = (req, res)=>{
    const id = +req.params.id
    const productos = leerProductos()
    const producto = productos.find((producto)=>producto.id === id)
    if (producto) return res.json(producto)
        res.send('El producto no existe')
}



const escribirProductos =(productos)=> fs.writeFileSync(productosPath, JSON.stringify(productos,null,2))
    




const agregarProducto =(req, res)=>{
    const productos = leerProductos()
    const nuevoProducto = req.body
    nuevoProducto.id = productos.length +1
    productos.push(nuevoProducto)
    escribirProductos(productos)
    res.json(nuevoProducto)
}


const eliminarProducto = (req, res)=>{
    const productos = leerProductos()
    const id = +req.params.id
    const productosFiltrados = productos.filter((producto)=>producto.id !== id)
    if (productosFiltrados.length === productos.length){
        return res.status (404)
    }
escribirProductos (productosFiltrados)


    res.send('Producto eliminado') 
}

const actualizarProducto =(req, res)=>{
    const productos = leerProductos()
    const newInfoProducto = req.body
    const id = +req.params.id
    const index = productos.findIndex((producto)=> producto.id === id)
    if (index === -1 ) return res.status(404).json({error:'No encontramos al producto'})
    console.log (index)
productos [index] = {...productos [index], ...newInfoProducto}
escribirProductos = (productos)

res.status(200).json(productos[index])


}



module.exports= {listarProductos, agregarProducto, eliminarProducto, listarProducto, actualizarProducto}