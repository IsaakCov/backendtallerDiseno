// Importamos los tipos de datos de sequelize (que modela un sistema SQL) para definir nuestro modelo.
const { DataTypes } = require('sequelize');
// Importamos la base de datos para manipularla
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
        Productos: { 
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Los productos son obligatorios.'
                }
            }
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
            primaryKey: true,
            allowNull: false,
            defaultValue: 'PENDIENTE'
        }
    },
    {
        timestamps: true,
        createdAt: true,
        updatedAt: true
    }
)

module.exports = Pedidos;