const { DataTypes } = require('sequelize');
const database = require('../services/database.js');

const Pedidos = database.define(
    "Pedidos",
    {
        idPedido: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        CorreoUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        TotalPedido: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'El monto total es obligatorio.'
                }
            }
        },
        Estado: {
            type: DataTypes.ENUM,
            values: ['PENDIENTE', 'CONFIRMADO', 'ENVIADO', 'ENTREGADO', 'ANULADO'],
            allowNull: false,
            defaultValue: 'PENDIENTE'
        },
    },
    {
        timestamps: true,
        createdAt: true,
        updatedAt: true
    }
);

module.exports = Pedidos;