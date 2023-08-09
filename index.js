const express = require('express');
const app = express();

// Importa la base de datos y modelos
const conn = require('./services/database');
const Usuarios = require('./models/usuariosModel.js');
const FormularioDeConsultas = require('./models/formularioModel.js');
const Pedidos = require('./models/pedidosModel.js');
const Productos = require('./models/productosModel.js');

// Importa los controladores de rutas
const createUsuario = require('./controllers/createUsuario');

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Asociaciones entre modelos
Usuarios.hasMany(FormularioDeConsultas, { foreignKey: 'CorreoUsuario' });
FormularioDeConsultas.belongsTo(Usuarios, { foreignKey: 'CorreoUsuario' });

Usuarios.hasMany(Pedidos, { foreignKey: 'CorreoUsuario' });
Pedidos.belongsTo(Usuarios, { foreignKey: 'CorreoUsuario' });

Pedidos.belongsToMany(Productos, { through: 'PedidoProductos' });
Productos.belongsToMany(Pedidos, { through: 'PedidoProductos' });

const port = 3001;

// Conexión a la base de datos y sincronización de modelos
const database = async () => {
    try {
        await conn.authenticate();
        console.log('Base de datos conectada');
        // Sincroniza los modelos con la base de datos (quitamos el force para no eliminar tablas existentes)
        await Usuarios.sync();
        await Productos.sync();
        await Pedidos.sync();
        await FormularioDeConsultas.sync();
    } catch (error) {
        console.log('Algo salió mal con la conexión:', error);
    }
};

// Inicia el servidor y sincroniza la base de datos al inicio
app.listen(port, () => {
    database();
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});

// Rutas
app.post("/createUsuario", createUsuario);

