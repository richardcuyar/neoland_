const express = require ('express') // importando el modulo de express
const app = express () // creamos una instancia express
const userRouter = require('./routes/users')

app.use(express.json())
app.use('/users', userRouter)

app.listen(3000, ()=>{
    console.log ('El servidor se inicio correctamente')

})