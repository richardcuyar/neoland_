const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const memberSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: {
            type: String,
            required: true,
            minLength: [6, 'La contraseña debe tener al menos 6 caracteres']
        },

    }
)

memberSchema.pre('save', async function name(next) {
    if (!this.isModified('password')) return next()
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

memberSchema.pre('findOneAndUpdate', async function (next) {
    const update = this.getUpdate()
    console.log  (update)
    if (update.password) {
        const salt = await bcrypt.genSalt(10)
        update.password = await bcrypt.hash(update.password, salt)
    }
    next()
})


memberSchema.methods.matchPassword = async (password) => {
    return await bcrypt.compare(password, this.password)
}


const Member = mongoose.model('Member', memberSchema)

module.exports = Member