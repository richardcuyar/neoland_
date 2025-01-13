const Products = require ('../models/product')

    const createProduct = asyng ()=> {
        try {
            const product = await Product.create (req.body)
            res.status(200).json(product)
        } catch (error) {
            console.log (error)
            res.status(500).json({message: 'Error al crear el producto'})
        }
    }


    const getProduct = async (req, res) => {
        try {
            const product = await Product.findById(req.params.id)
        }

    }