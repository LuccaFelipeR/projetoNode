//importar o express
const express = require('express');
//criar uma aplicação express
const app = express();
//definir uma rota para a raiz do site
const port = 3000;



//configurando nosso middlewares
app.use(express.urlencoded({extended: true})); //para processar dados de formulários
app.use(express.json()); //para processar dados JSON

//Configurando o EJS
app.set('view engine', 'ejs');
//Configuração Opcional
app.set('views', './src/views'); //pasta onde estão os arquivos EJS

//
app.get('/', (req, res) => {
    const NOMESISTEMA = "CondoSys";
    res.render('index', { NOMESISTEMA });
});

app.get('/carros', (req, res) => {
    const cars = [
        {ID: 1, Marca: 'Toyota', Modelo: 'Corolla'},
        {ID: 2, Marca: 'Honda', Modelo: 'Civic'},
        {ID: 3, Marca: 'Ford', Modelo: 'Mustang'},
        {ID: 4, Marca: 'Chevrolet', Modelo: 'Camaro'},
        {ID: 5, Marca: 'Tesla', Modelo: 'Model 3'},
        {ID: 6, Marca: 'Volkswagen', Modelo: 'Golf'}
    ]
    res.render('list_carros', {listaCarros: cars});
});

app.get('/motos', (req, res) => {
     const MOTOS = [
        {ID: 1, Marca: 'Honda', Modelo: 'CB500F'},
        {ID: 2, Marca: 'Yamaha', Modelo: 'MT-07'},
        {ID: 3, Marca: 'Kawasaki', Modelo: 'Z650'},
        {ID: 4, Marca: 'Suzuki', Modelo: 'SV650'},
        {ID: 5, Marca: 'Ducati', Modelo: 'Monster 821'},
        {ID: 6, Marca: 'BMW', Modelo: 'F 900 R'},
        {ID: 7, Marca: 'Triumph', Modelo: 'Street Triple RS'}
    ]
    res.render('list_motos', {LISTA_DE_MOTOS: MOTOS});
});

//inicializando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})