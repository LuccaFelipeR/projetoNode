// Importando o pacote Express
const express = require("express");

//Instanciando/Inicializando o Express
const app = express();
const port = 3000;


//Middleware para processar o corpo da requisição, necessário para receber dados de formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    console.log("Requisição tipo GET recebida na rota /");
    res.send("<h1> Olá, mundo! Bem vindo ao sistema XPTO!</h1>"); 
});

app.get("/cadastrocliente", (req, res) => {
    console.log("Requisição tipo GET recebida na rota /cadastrocliente");
    res.send("<h1> Página de cadastro de cliente</h1>"); 
});

app.get('/buscar', (req, res) => {
    const termoBusca = req.query.termo;
    if (termoBusca) {
        console.log('Parametro via Query: ' + termoBusca);
        res.send(`<h1>Resultados da busca para: ${termoBusca}</h1>`);
    } else {
        res.send("<h1>Por favor, forneça um termo de busca usando o parâmetro 'termo'</h1>");
    }
});

//Não se deve fazer isso, passar informações sensiveis via query params, mas é apenas um exemplo didático.
app.get('/login', (req, res) => {
    const pLogin = req.query.login;
    const pSenha = req.query.senha;

    if (pLogin === "lucca" && pSenha === "1234") {
        return res.send("<h1>Login bem sucedido! Bem vindo, Lucca!</h1>");
    }

    return res.send("<h1>Login ou senha incorretos. Por favor, tente novamente.</h1>");
});

app.post('/receberform', (req, res) => {
    const dados = req.body;

    console.log("Dados vindo do formulário: ", dados);
    res.send("Dados Enviados com Sucesso!");
});

app.post('/login', (req, res) => {
    const { login, senha } = req.body;
    console.log("Dados de login recebidos: ", { login, senha });
    if (login === "lucca" && senha === "1234") {
        res.status(200).send("<h1>Login bem sucedido! Bem vindo ao Sistema</h1><h4>Lucca, o que vamos fazer hoje?</h4>");
    } else {
        res.status(200).send("<h1>Login ou senha incorretos. Por favor, tente novamente.</h1>");
    }
});

app.post('/cadastraproduto', (req, res) => {
    const {codigo, nome, preco} = req.body;
    if(codigo && nome && preco){
        return res.status(202).send(`<h1>Produto cadastrado com sucesso!</h1><h4>Código: ${codigo} - Nome: ${nome} - Preço: R$ ${preco}</h4>`);
    }else {
        res.status(400).send("<h1>Dados incompletos. Você não informou algum dos 3 Parametros</h1>");
    }
});




app.put("/editaronibus", (req, res) => {
    const { numero, linha, lugares } = req.body;
    if (numero && linha && lugares) {
        return res.status(200).send(`<h1>Ônibus editado com sucesso!</h1><h4>Número: ${numero} - Linha: ${linha} - Lugares: ${lugares}</h4>`);
    } else {
        return res.status(400).send("<h1>Dados incompletos. Você não informou algum dos 3 Parametros</h1>");
    }
});


//Startando o servidor na porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});