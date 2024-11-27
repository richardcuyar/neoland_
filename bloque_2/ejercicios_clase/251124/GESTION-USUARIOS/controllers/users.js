const fs = require('fs')
const path = require('path')


const usuariosPath = path.join(__dirname, '../data/usuarios.json')


const leerUsuarios = ()=>{
    const data = fs.readFileSync(usuariosPath, 'utf-8')
    console.log (data)  
    return JSON.parse(data)
}

const listarUsuarios = (req, res)=>{
    const users = leerUsuarios()
    res.json(users)
}

const listarUsuario =(req, res)=>{
    const id = +req.params.id
    console.log (id)
    const users = leerUsuarios()
    console.log (users)
    const user = users.find((user)=> {
        console.log (user.id, id)
        return user.id === id
})
    console.log (user)
    if (user) return res.json(user)
    res.status(404)
    res.send('Usuario no encontrado')
}

const guardarUsuarios=(usuarios)=>{
    const data = fs.writeFileSync(usuariosPath, JSON.stringify(usuarios))
    console.log(data)
}

const crearUsuario = (req, res)=>{
    const usuarios = leerUsuarios()
    const newUser = req.body //{"nombre": "Carlos Gómez", "email": "carlos.gomez@example.com"}
    newUser.id = usuarios.lenght + 
    newUser // {id:4, "nombre": "Carlos Gómez", "email": "carlos.gomez@example.com"}
    usuarios.push(newUser)
    guardarUsuarios(usuarios)
    res.status(200).json(newUser)

}

const actualizarUsuario =(req, res)=>{
    const usuarios = leerUsuarios()
    const newInfoUser = req.body
    const id = +req.params.id
    const index = usuarios.findIndex(user=> user.id === id)

    if(index === -1){  // que el id no existe en nuestros usuarios
        return res.status(404).json({error: 'Usuario no encontrado'})
    }



    usuarios[index] = {...usuarios [index], ...newInfoUser }
guardarUsuarios(usuarios)

res.status(200).json(usuarios[index])

}
const eliminarUser =(req, res)=>{
    const usuarios = leerUsuarios()
    const id = +req.params.id
    const usersFiltered = usuarios.filter(user=>user.id !== id)

    if(usersFiltered.lenght === usuarios.lenght){  // que el id no existe en nuestros usuarios
        return res.status(404).json({error: 'Usuario no encontrado'})
    }
    guardarUsuarios(usersFiltered)
    res.status(200).send()


}
module.exports = {leerUsuarios, listarUsuarios, listarUsuario, crearUsuario, actualizarUsuario, eliminarUser}