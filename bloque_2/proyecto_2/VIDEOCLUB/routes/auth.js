const express = require('express')
const {registerMember} = require ('../controllers/auth')

const router = express.Router()



router.post('/register', registerMember)

module.exports = router