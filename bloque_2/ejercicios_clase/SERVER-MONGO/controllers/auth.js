const User = require ('../models/users')
const jwt = require('jsonwebtoken')


const generateToken =(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}

const registerUser = async(req, res)=>{
    const user = req.body

    try {
        const userExists = await User.findOne({email})
        if(userExits){
            return res.status(400).json({message: 'El usuario ya existe'})
        }
        const newUser = User.create(user)
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            token: generateToken (newUser._id),
        })
    } catch (error) {
        console.log (error)
        res.status(500)
}

}

module.exports = {registerUser}