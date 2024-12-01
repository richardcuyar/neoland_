const express = require ('express')

const router = express.Router()

const {listarProductos, agregarProducto, eliminarProducto, listarProducto, actualizarProducto} = require ('../controllers/products')
const validarProducto = require ('../middleware/productoMiddleware')


router.get('/', listarProductos)
router.get('/:id', listarProducto)
router.put('/:id', validarProducto, actualizarProducto)
router.post('/', validarProducto, agregarProducto)
router.delete('/:id', eliminarProducto)

module.exports = router