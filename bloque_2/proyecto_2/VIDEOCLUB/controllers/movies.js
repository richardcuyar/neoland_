const Movie = require('../models/movies')

const createMovie = async (req, res) => {
    try {
        const { name } = req.body;

        // Validar si el nombre ya existe
        const movieExists = await Movie.findOne({ name });
        if (movieExists) {
            return res.status(400).json({ message: 'La película ya existe' });
        }

        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        console.error('Error al crear película:', error);
        res.status(500).json({ message: 'Error al crear película' });
    }
};

const getMovie = async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            const movie = await Movie.findById(id);
            if (!movie) {
                return res.status(404).json({ message: 'Película no encontrada' });
            }
            return res.status(200).json(movie);
        } else {
            const movies = await Movie.find();
            res.status(200).json(movies);
        }
    } catch (error) {
        console.error('Error al obtener películas:', error);
        res.status(500).json({ message: 'Error del servidor al obtener películas' });
    }
};

const updateMovie = async (req, res) => {
    try {
        // Buscar el producto por ID
        const movie = await Movie.findById(req.params.id);

        // Verificar si el producto existe
        if (!movie) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }

        // Actualizar las propiedades del producto con los datos del cuerpo de la solicitud
        Object.keys(req.body).forEach((key) => {
            movie[key] = req.body[key];
        });

        // Guardar los cambios en la base de datos
        const movieUpdated = await movie.save();

        // Respuesta exitosa
        res.status(200).json(movieUpdated);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


const deleteMovie = async (req, res) =>{
    try {
        const deletedMovie = await Movie.findByIdAndDelete (req.params.id)
        console.log (deletedMovie)
        if (!deletedMovie) {
            return res.status (404).json ({errorMessage: 'Película no encontrada'})
        }
        res.json ({message: 'Película borrada correctamente'})
    } catch (error) {
        console.log (error)
        res.status (500).json ({message: 'Error en el servidor'})
        
    }

};



module.exports = { createMovie, getMovie, updateMovie, deleteMovie }