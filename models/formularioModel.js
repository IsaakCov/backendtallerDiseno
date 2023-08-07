// Importamos los tipos de datos de sequelize (que modela un sistema SQL) para definir nuestro modelo.
const {DataTypes} = require('sequelize');
// Importamos la base de datos para manipularla
const database = require('../services/database.js');

const FormularioDeConsultas = database.define(
    "FormularioDeConsultas",
    {
        idConsulta:
        {
            type: DataTypes.UUIDV4,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        Comentario:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El comentario es obligatorio.'
                }
            }
        },
        // Falta enlazar la llave foranea y preguntar como hacer para que compartan datos
        CorreoUsuario:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                notNull: {
                    msg: 'El correo es obligatorio.'
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

module.exports = FormularioDeConsultas;