const mongoose = require('mongoose')

const connectDB = async (params) => {
    try {
        mongoose.connect (process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("CONEXION A MONGO DB COMPLETADA")
    } catch (error) {
        console.log (error)
    }
}

module.exports = connectDB