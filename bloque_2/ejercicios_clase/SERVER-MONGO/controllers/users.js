const User = require ('../models/users')

const createUser = async (req, res ) =>{
    try {
        const user = new User (req.body)
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        console.log (error) 
        res.status(500)
    }
 }

const updateUser = async (req, res)=>{
    console.log (req.params.id)
    console.log (req.body)

    try {
        const user = await User.findByIdAndUpdate(req.params.id, { ...req.body})
    if(!user){
        return res.status(404).json({ errorMessage: 'User not found'})
    }
    res.status(200).json(user)
    
} catch (error) {
    res.status(500)
    }
}

const deleteUser = async (req, res)=>{
    try {
        const userDelete = User.findByIdAndDelete (req.params.id)
        if(!userDelete){
            return res.status(404).json({ errorMessage: 'User not found'})
        }
        res.json({ message: 'User deleted'})

    } catch (error) {
        console.log (error)
    }
}




 module.exports = {createUser, updateUser, deleteUser}