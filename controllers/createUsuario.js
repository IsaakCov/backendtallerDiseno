const usuarios = require('../models/usuariosModel')


const createUsuario = async(req, res) =>{
    const {Correo, Nombre, Apellido, Telefono, Contrasena} = req.body;
    try {
        await usuarios.create({
            Correo: Correo,
            Nombre: Nombre,
            Apellido: Apellido,
            Telefono: Telefono,
            Contrasena: Contrasena
        });
        res.status(200).json({msg: 'Usuario registrado con exito'})
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = createUsuario;