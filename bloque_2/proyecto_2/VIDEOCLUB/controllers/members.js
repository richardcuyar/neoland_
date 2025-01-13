const User = require ('../models/members');

const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'mysecretkey'; 

const createMember = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const existingMember = await Member.findOne({ email });
        if (existingMember) {
            return res.status(400).json({ message: 'Este socio ya existe' });
        }

        const newMember = await Member.create({ name, email, password });

        res.status(201).json({ message: 'Socio creado correctamente', user: newMember });
    } catch (error) {
        console.error( error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


const getMember = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const user = await Member.findById(id);
            if (!member) {
                return res.status(404).json({ message: 'Socio no encontrado' });
            }
            return res.status(200).json(member);
        }


        const members = await Member.find();
        res.status(200).json(members);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


const updateMember = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);

        if (!member) {
            return res.status(404).json({ errorMessage: 'Socio no encontrado' });
        }

        const memberUpdated = await Member.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
        res.status(200).json(memberUpdated);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


const deleteMember = async (req, res) => {
    try {
        const memberDelete = await Member.findByIdAndDelete(req.params.id);

        if (!memberDelete) {
            return res.status(404).json({ errorMessage: 'Socio no encontrado' });
        }

        res.status(200).json({ message: 'Usuario eliminado correctamente', member: memberDelete });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};








module.exports = {createMember, getMember, updateMember, deleteMember};