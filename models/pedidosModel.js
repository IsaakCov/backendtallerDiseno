// Importamos los tipos de datos de sequelize (que modela un sistema SQL) para definir nuestro modelo.
import {DataTypes, ENUM} from 'sequelize';
// Importamos la base de datos para manipularla
const database = require('../services/database.js');

const Pedidos = database.define(
    "Pedidos",
    {
        idPedido:
        {
            type: DataTypes.UUIDV4,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true,
            
        },
        // Lo mismo que en la anterior, falta enlazar llaves foraneas y asegurarse que se enlacen
        CorreoUsuario:
        {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El correo es obligatorio.'
                }
            }
        },
        idProductos:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El producto es obligatorio.'
                }
            }
        },
        Cantidades:
        {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'La cantidad de productos es obligatoria.'
                }
            }
        },
        Estado:
        {
            type: DataTypes.ENUM('PENDIENTE', 'CONFIRMADO', 'ENVIADO', 'ENTREAGADO', 'ANULADO'),
            primaryKey: true,
            allowNull: false,
            defaultValue: 'PENDIENTE'
        },
        TotalPedido:
        {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El monto total es obligatorio.'
                }
            }
        },

    },
    {
        timestamps: true,
        createdAt: true,
        updatedAt: true
    }
)

module.exports = Pedidos;