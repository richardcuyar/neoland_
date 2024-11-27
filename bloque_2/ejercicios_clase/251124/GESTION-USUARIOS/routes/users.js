const express = require ('express')

const router = express.Router()

const {listarUsuarios, listarUsuario, crearUsuario, actualizarUsuario, eliminarUsuario, eliminarUser} = require ('../controllers/users')

router.get('/', listarUsuarios) // endpoint para devolver todos los usuarios
router.get('/:id', listarUsuario) // endpoint para devolver un usuario por id
router.post('/', crearUsuario)
router.put('/:id', actualizarUsuario)
router.delete('/:id', eliminarUser)  


module.exports = router