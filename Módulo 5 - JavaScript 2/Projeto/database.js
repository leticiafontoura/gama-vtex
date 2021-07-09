//aqui vamos simular um JSON

const livros = [
    {
        id: 1,
        autor: "O dia do Coringa",
        categoria: "Fantasia",
        paginas: 300,
        recomenda: true,
        leu: true
    },
    {
        id: 2,
        autor: "Harry Potter",
        categoria: "Fantasia",
        paginas: 350,
        recomenda: true,
        leu: true
    },
    {
        id: 3,
        autor: "Não fale com estranhos",
        categoria: "Policial",
        paginas: 301,
        recomenda: false,
        leu: false
    },
    {
        id: 4,
        autor: "O Hobbit",
        categoria: "Fantasia",
        paginas: 210,
        recomenda: true,
        leu: true
    },
    {
        id: 5,
        autor: "Frankstein",
        categoria: "Ficção",
        paginas: 300,
        recomenda: false,
        leu: false
    }
]

module.exports = livros; //essa é a forma de exportarmos arquivos JS para ser utilizado em outros lugares através do nodeJS