const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.JWT_SECRET || 'mysecretkey';

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Acceso Denegado - Te hundes como el Titanic' })
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decode)
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: 'Token invalido' })

    }

}

module.exports = authenticate