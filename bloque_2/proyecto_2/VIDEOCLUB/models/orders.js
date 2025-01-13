const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema(
    {
        membert: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', require: true },
        movies: [
            {
                movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', require: true },
                quantity: { type: Number, require: true }
            }
        ],
        totalPrice: { type: Number, require: true },
        status: { type: String, default: 'Pending', enum: ['Pending', 'Out of delivery', 'Delivered',] }
    },
    { timestamps: true }

)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order