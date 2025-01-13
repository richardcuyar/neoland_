const express = require('express')

const { createMovie, getMovie, updateMovie, deleteMovie} = require('../controllers/movies')

const router = express.Router()



router.post('/', createMovie)
router.get('/:id?', getMovie)
router.put('/:id', updateMovie)
router.delete('/:id', deleteMovie);

module.exports = router;