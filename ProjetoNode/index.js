/*
console.log("Código funcionando!");
*/

//biblioteca universal
const fs = require('fs');

//Exemplo de codigo Node.js

const nome = "Lucca Rabelo";

console.log("Seja bem vindo: ", nome);

fs.writeFile("arquivo01.txt", "esse arquivo foi gerado usando o Node.js", (err) => {
    if (err) throw err;
    console.log("Arquivo escrito com sucesso!");
});


fs.readFile("arquivo01-externo.txt", "utf-8", (err, data) => {

    if (err) throw err;
    console.log(data);


});