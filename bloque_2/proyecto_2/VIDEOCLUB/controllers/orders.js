const Order = require('../models/orders')
const Movie = require('../models/movies')



const createOrder = async (req, res) => {
    const { member, movies } = req.body;

    try {
        if (!member || !movies || movies.length === 0) {
            return res.status(400).json({ message: 'Debes proporcionar un socio y al menos una película.' });
        }

        let totalPrice = 0;

        for (const item of movies) {
            const movie = await Movie.findById(item.movie);
            if (!movie) {
                return res.status(404).json({ message: `Película con ID ${item.movie} no encontrada.` });
            }
            if (movie.stock < item.quantity) {
                return res.status(400).json({ message: `Stock insuficiente para la película: ${movie.name}.` });
            }

    
            movie.stock -= item.quantity;
            await movie.save();

            totalPrice += movie.price * item.quantity;
        }

        const newOrder = await Order.create({
            member,
            movies,
            totalPrice, 
            status: 'Pending',
        });

        res.status(201).json({
            message: 'Pedido creado con éxito',
            order: newOrder,
        });
    } catch (error) {
        console.error('Error al crear el pedido:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};



const getOrder = async (req, res) => {
    try {
        console.log( req.params.id);

        // Verificar si se solicitó un pedido específico por ID
        if (req.params.id) {
            const order = await Order.findById(req.params.id).populate('movies.movie');
            
            // Si no se encuentra el pedido, devolver 404
            if (!order) {
                return res.status(404).json({ message: 'Pedido no encontrado' });
            }

            // Responder con el pedido encontrado
            return res.status(200).json(order);
        } else {
            // Si no hay ID, devolver todos los pedidos
            const orders = await Order.find().populate('movies.movie');
            return res.status(200).json(orders);
        }

    } catch (error) {
        console.error( error);
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};




const updateOrder = async (req, res) => {
    const { movies, member } = req.body;

    try {
        // Obtener el pedido original
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Devolver el stock de los productos del pedido original
        for (const item of order.movies) {
            const movie = await Movie.findById(item.movie);
            if (movie) {
                movie.stock += item.quantity;
                await movie.save();
            }
        }

        // Validar y actualizar el stock de los nuevos productos
        let totalPrice = 0;
        for (const item of movies) {
            const movie = await Movie.findById(item.movie);
            if (!movie) {
                return res.status(404).json({ message: 'Película no encontrada' });
            }
            if (item.quantity > movie.stock) {
                return res.status(400).json({ message: 'No queda stock de esta película' });
            }
            totalPrice += movie.price * item.quantity;
            movie.stock -= item.quantity;
            await movie.save();
        }

        // Actualizar el pedido
        order.movies = movies;
        order.totalPrice = totalPrice;
        order.member = member;

        await order.save();

        res.status(200).json(order);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};


const deleteOrder = async (req, res) => {
    try {
        // Buscar el pedido por ID
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }

        // Restablecer el stock de los productos asociados al pedido
        for (const item of order.movies) {
            const movie = await Movie.findById(item.movie);
            if (movie) {
                movie.stock += item.quantity; // Reintegrar la cantidad al stock
                await movie.save();
            }
        }


        // Eliminar el pedido
        await Order.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: 'Pedido eliminado con éxito', order });
    } catch (error) {
        console.error("Error al eliminar el pedido:", error);
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};


module.exports = {createOrder, getOrder, updateOrder, deleteOrder}