// Crear un objeto vacio para que sequelize lo tome y cree la tabla intermedia
// Importamos los tipos de datos de sequelize (que modela un sistema SQL) para definir nuestro modelo.
const {DataTypes} = require('sequelize');
// Importamos la base de datos para manipularla
const database = require('../services/database.js');

const PedidoProductos = database.define(
    "PedidoProductos",
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            
        },
        selfGranted: DataTypes.BOOLEAN
        
    },
    {
        timestamps: false,
    }
)

module.exports = PedidoProductos;