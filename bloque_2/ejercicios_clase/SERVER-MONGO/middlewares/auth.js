const jwt = require ('jsonwebtoken')

const authenticate = async (req, res, next) =>{
    const token = req.headers.authorization.slice(6)
    console.log (token)
    if(!token){
        return res.status(401).json ({message: 'No estas autorizado, Joaquín te pego con la porra'})
   }
   try {
        const decode = jwt.verify (token, process.env.JWT_SECRET)
        console.log (decode)
        next ()
   } catch (error) {
    console.log (error)
    return res.status(401).json({message: 'Token invalido'})

   }
}


module.exports = authenticate