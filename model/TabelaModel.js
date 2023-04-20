//Importação do pacote SEQUELIZE
const Sequelize = require('sequelize');

//Importação do arquivo de Conexão com o BD
const connection = require('../database/Database');

const modelCategoria = connection.define(
    'tbl_categoria',
    {
        cod_Animal: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
      nome_Animal: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        identificacao_animal: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        sexo_animal: {
            type: Sequelize.STRING(1),
            allowNull: false
        },
        cor_animal: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        dataNasc_animal: {
            type: Sequelize.DATE(6),
            allowNull: false
        }

    }
);

//modelCategoria.sync({force:true});

module.exports = modelCategoria;