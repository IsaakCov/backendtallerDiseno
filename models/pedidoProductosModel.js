const { DataTypes } = require('sequelize');
const database = require('../services/database.js');

const PedidoProductos = database.define(
    "PedidoProductos",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = PedidoProductos;