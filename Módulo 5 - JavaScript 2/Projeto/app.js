//vamos iniciar um projeto NODE. terminal > npm init -i

//importar livros exportados em database.js

const livros = require("./database");
console.log(livros);

//1o passo: pegar input da pessoa usuária se ela quer escolher livro por categoria

const readline = require("readline-sync");

const entradaInicial = readline.question("Deseja buscar um livro? S/N ")

//Se sim, mostrar categorias disponiveis e perguntar qual era quer

if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias disponíveis:");
    console.log("Fantasia", "/Policial", "/Ficção");

    const entradaCategoria = readline.question("Qual categoria você deseja? ");

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);

} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
    console.log("Esses são todos os livros disponíveis:");
    console.table(livrosOrdenados);

}

//Se não, mostrar todos os livros em ordem crescente pela quantidade de paginas