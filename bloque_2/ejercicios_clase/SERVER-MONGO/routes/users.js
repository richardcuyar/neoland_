const express = require('express')
const authenticate = require)'../middleware'

const {createUser, updateUser} = require ('../controllers/users')

const router = express.Router()


router.post ('/', createUser)
router.put ('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;