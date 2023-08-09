// Instalamos y obtenemos express.
const express = require('express');
const app = express();
// Importamos la base de datos para manipularla
const conn = require('./services/database');

// IMPORTAMOS LOS MODELOS DE TABLAS
// Modelo de Usuarios
const Usuarios = require('./models/usuariosModel.js');
const FormularioDeConsultas = require('./models/formularioModel.js');
const Pedidos = require('./models/pedidosModel.js');
const Productos = require('./models/productosModel.js');
const PedidoProductos = require('./models/pedidoProductosModel.js')
//Creamos las conexiones de las tablas entre si
// Definimos las asociaciones
Usuarios.hasMany(FormularioDeConsultas, { foreignKey: 'CorreoUsuario' });
FormularioDeConsultas.belongsTo(Usuarios, { foreignKey: 'CorreoUsuario' });

Usuarios.hasMany(Pedidos, { foreignKey: 'CorreoUsuario' });
Pedidos.belongsTo(Usuarios, { foreignKey: 'CorreoUsuario' });

Pedidos.belongsToMany(Productos, { through: 'PedidoProductos', foreignKey: 'idPedido' });
Productos.belongsToMany(Pedidos, { through: 'PedidoProductos', foreignKey: 'idProducto' });


// IMPORTAMOS LOS CONTROLADORES DE LAS RUTAS
const createUsuario = require('./controllers/createUsuario')

//Formateamos los requests para leerlos, esto analiza el cuerpo de las peticiones entrantes en:
// Formato JSON
app.use(express.json());
// Formato listas o strings
app.use(express.urlencoded({extended: true}));

const port = 3001;

//app.listen(port, console.log("Servidor ejecutandose correctamente"))

// Generamos la conexion con la base de datos.
const database = async () => {
    try {
        await conn.authenticate();
        console.log('Base de datos conectada')
        //Generamos la sincronizacion de nuestro modelo con la base de datos (compatibiliza la tabla, si no existe, la crea)
        await Usuarios.sync({force: true});
        await Productos.sync({force: true});
        await Pedidos.sync({force: true});
        await FormularioDeConsultas.sync({force: true});
        
        //await PedidoProductos.sync({force: true});
    } 
    catch (error) {
        console.log('Algo salio mal con la conexion', error)
    }
}

// Una vez generada la conexion, la llamaremos cada vez que se inicie el servidor

app.listen(port, () => {
    database();
    console.log("Servidor ejecutandose correctamente");
})


// Enrutamiento

app.post("/createUsuario", createUsuario);