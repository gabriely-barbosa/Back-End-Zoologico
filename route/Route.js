//Importa o pacote do express para o index.js
const express = require('express');

//Conexão com a tabela
const modelCategoria = require('../model/TabelaModel')

//Gerenciador de rotas do express
const Router = express.Router();

//Rotas de CRUD de categoria
//Rota de cadastro de categoria
Router.post('/cadastrarCategoria', (req, res) => {
    console.log(req.body);

    //let nome_categoria = req.body.nome_categoria
    let {nome_Animal, identificacao_animal, sexo_animal, cor_animal, dataNasc_animal} = req.body;

    modelCategoria.create(
        //Dados da inserção
        {nome_Animal, identificacao_animal, sexo_animal, cor_animal, dataNasc_animal}
    ).then(
        res.send('Animal cadastrado com sucesso!')
        ).catch(
    (error)=>{
        return res.status(201).json({
            erroStatus:true,
            mensagemStatus:"Erro ao cadastrar Animal!"
        })
    }
)
});

//Rota de listagem de categoria
Router.get('/listarAnimal', (req, res) => {
    
   
    // Ação de seleção de dados do sequelize 
    modelCategoria.findAll()
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Categoria Recuperada com sucesso!",
                data:response 
            });
        }
    ).catch(
        (error) => {
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao recuperar a categoria",
                errorObject:error
            });
        }
    )
});

Router.get('/listarCategoriaPK/:cod_categoria', (req, res) => {
    
    //Declarar e receber o dado de código de categoria
    let {cod_Animal, identificacao_animal, sexo_animal, cor_animal, dataNasc_animal} = req.params;

    // Ação de seleção de dados do sequelize 
    modelCategoria.findByPK(cod_Animal, identificacao_animal, sexo_animal, cor_animal, dataNasc_animal)
    .then(
        (response)=>{
            res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Categoria Recuperada com sucesso!",
                data:response 
            });
        }
    ).catch(
        (error) => {
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao recuperar a categoria",
                errorObject:error
            });
        }
    )
});

//Rota de listagem de categoria por nome_categoria
Router.get('/listarCategoriaNOME/:nome_categoria', (req, res) => {
    let {nome_Animal} = req.params;

    modelCategoria.findOne({attributes:['cod_Animal', 'nome_Animal' , 'identificacao_animal' , 'sexo_animal' , 'cor_animal' , 'dataNasc_animal'],where:{nome_Animal}})
    .then(
        (response) => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Categoria recuperada com sucesso",
                data:response 
        })
        }
    ).catch(
        (error) => {
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao recuperar categoria",
                errorObject:error
            });

        }
    )
});


//Rota de alteração de categoria
Router.put('/alterarCategoria', (req, res) => {

    // const cod_categoria = req.body.cod_categoria;
    // const nome_categoria = req.body.cod_categoria;
    const {cod_Animal, nome_Animal, identificacao_animal, sexo_animal, cor_animal, dataNasc_animal} = req.body;

    modelCategoria.update(
        {nome_Animal, identificacao_animal, sexo_animal, cor_animal, dataNasc_animal},
        {where:{cod_Animal}}
    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Categoria alterada com sucesso'
            })
        }
    ).catch(
        (error) => {
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao alterar categoria",
                errorObject:error
            });
        }
    )
});

//Rota de exclusão de categoria
Router.delete('/deletarCategoria/:cod_categoria', (req, res) => {
    console.log(req.params);
    let {cod_Animal} = req.params

    modelCategoria.destroy(
        {where:{cod_Animal}}
    ).then(
        () => {
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"Categoria excluida com sucesso"
            })
        }
    ).catch(
        (error) => {
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"Erro ao excluir Animal",
                errorObject:error
            });
        }
    )
});

module.exports = Router;