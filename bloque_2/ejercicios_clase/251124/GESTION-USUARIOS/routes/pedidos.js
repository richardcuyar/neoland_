const express = require ('express')
const router = express.Router()

const {listarPedidos, listarPedido} = require ('../controllers/pedidos')


router.get('/', listarPedidos)
router.get('/:id', listarPedido)
router.put('/:id', validarProducto, actualizarProducto)
router.post('/', validarProducto, agregarProducto)
router.delete('/:id', eliminarProducto)

module.exports = router