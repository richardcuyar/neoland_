const mongoose = require("mongoose")



const movieSchema = new mongoose.Schema(
    {
        name: { type: String, require: true, unique: true },
        actors: { type: [String] },
        genre: { type: String },
        releaseYear: {type: Number, require: true},
        price: { type: Number, require: true },
        stock: { type: Number, require: true }
    },
    { timestamps: true }
)


const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie