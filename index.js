//Importa o pacote do EXPRESS para o script index.js
const express = require('express');

//Torna o EXPRESS executável dentro do index.js através da const app
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const routesCategoria = require('./route/Route');

app.use('/', routesCategoria);

/*EXEMPLOS DE ROTA*/
//app.get('/', function (req, res) {
//    res.send('Resposta da rota da raiz da aplicação');

app.listen(3000, () => {
    console.log('Servidor na ativa!');
});