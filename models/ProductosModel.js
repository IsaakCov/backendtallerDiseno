// Importamos los tipos de datos de sequelize (que modela un sistema SQL) para definir nuestro modelo.
const {DataTypes} = require('sequelize');
// Importamos la base de datos para manipularla
const database = require('../services/database.js');

const Productos = database.define(
    "Productos",
    {
        idProducto:
        {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true,
            
        },
        Descripcion:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'La descripcion es obligatoria.'
                }
            }
        },
        Precio:
        {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El precio es obligatorio.'
                }
            }
        },
        Stock:
        {
            type: DataTypes.INTEGER
        },
        Medidas:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El precio es obligatorio.'
                }
            }
        },
        Imagen:
        {
            type: DataTypes.STRING, // Almacenamos la direccion
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'La imagen es obligatoria.'
                }
            }
        },
        Color:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El precio es obligatorio.'
                }
            }
        }
    },
    {
        timestamps: true,
        createdAt: true,
        updatedAt: true
    }
)

//Exportamos nuestro modelo para manipularlo mas adelante
module.exports = Productos;