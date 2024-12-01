const express = require ('express')

const router = express.Router()

const {listarUsuarios, listarUsuario, crearUsuario, actualizarUsuario, eliminarUser} = require ('../controllers/users')
const validarUsuario = require ('../middleware/userMiddleware')



router.get('/', listarUsuarios) // endpoint para devolver todos los usuarios
router.get('/:id', listarUsuario) // endpoint para devolver un usuario por id
router.post('/', validarUsuario, crearUsuario)
router.put('/:id', validarUsuario, actualizarUsuario)
router.delete('/:id', eliminarUser)  


module.exports = router