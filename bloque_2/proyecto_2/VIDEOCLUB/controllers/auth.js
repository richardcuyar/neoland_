const Member = require ('../models/members')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const SECRET_KEY = process.env.JWT_SECRET || 'mysecretkey';



const generateToken =(id)=>{
    return jwt.sign({id}, SECRET_KEY, {expiresIn: '30d'})
}

const registerMember = async(req, res)=>{
    const { name, email, password } = req.body

    try {
        if (!name || !email || !password) {
            return res.status (400).json({message: 'Todos los campos son obligatorios'});
            }

        const memberExists = await Member.findOne({email})
        if(memberExists){
            return res.status(400).json({message: 'Este socio ya existe'})
        }

        const newMember = await Member.create ({ name, email, password });
        res.status(201).json({
            _id: newMember._id,
            name: newMember.name,
            email: newMember.email,
            token: generateToken (newMember._id),
        })
    } catch (error) {
        console.error ('Error al registrar socio:', error);
        res.status(500).json ({ message: 'Error en el servidor' });
}

};

const loginMember = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el miembro existe
        const member = await Member.findOne({ email });
        if (!member) {
            return res.status(404).json({ message: 'El socio no existe' });
        }

        // Comparar la contraseña
        const isMatch = await bcrypt.compare(password, member.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Generar un nuevo token
        const token = generateToken (member._id);

        
        res.status(200).json({
            _id: member._id,
            name: member.name,
            email: member.email,
            token,
        });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};




module.exports = {registerMember, loginMember};

