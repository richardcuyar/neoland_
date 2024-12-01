const fs = require('fs')
const path = require('path')



const pedidosPath = path.join(__dirname, '../data/pedidos.json')


const leerPedidos = ()=>{
    const data = fs.readFileSync(pedidosPath, 'utf-8')
    console.log (data)  
    return JSON.parse(data)
}

const listarPedidos = (req, res)=>{
    const pedidos = leerPedidos()
    res.json(pedidos)
}


const listarPedido = (req, res)=>{
    const id = +req.params.id
    const pedidos = leerPedidos()
    const pedido = pedidos.find((pedido)=>pedido.id === id)
    if (pedido) return res.json(pedido)
        res.send('El pedido no existe')
}





module.exports = {listarPedidos, listarPedido}