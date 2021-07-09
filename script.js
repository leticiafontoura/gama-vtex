{
    var nomeMeu = "leticia";
}

console.log(nomeMeu);

var x = 1;
var y = 3;
var z = "1";

console.log(x == z); //retorna TRUE pois estamos comparando apenas o valor, não o tipo.
console.log(x === z); //retorna FALSE porque os TIPOS são difernetes (number e string).
console.log(x != z); //retorna FALSE pois estamos comparando apenas o valor, não o tipo.
console.log(x !== z); //retorna TRUE porque os TIPOS são difernetes (number e string).
console.log(x < y); //retorna true.
console.log(y > x); //retorna true.

var num = 1;

if (num === 1) {
    console.log("num é igual a 1!");
} else {
    console.log("num não é igual a 1!");
}


var month = "dec";

switch (month) {
    case "feb":
        console.log("mes 2");
        break; //interrompe o bloco de código caso ele seja atendido.
    case "mar":
        console.log("mes 3");
        break; //interrompe o bloco de código caso ele seja atendido.
    case "apr":
        console.log("mes 4");
        break; //interrompe o bloco de código caso ele seja atendido.
    case "jan":
        console.log("mes 1");
        break; //interrompe o bloco de código caso ele seja atendido.
    default: //quando nenhum caso é atendido
        console.log("nenhum caso atendido")
}

var colors = ["green", "yellow", "blue", "black", "gray"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log(colors.length)

// class Book {
//     constructor(title, author, pages) {
//         this.titles = title;
//         this.author = author;
//         this.pages = pages;
//     }

//     read() {
//         return `Estou lendo ${this.title}`
//     }
// }

// let book = new Book("Harry Potter", "JK Rowling", 300);

// console.log(book);
// console.log(book.read());

class Book {
    constructor(tituloDoLivro, autorDoLivro, pagsDoLivro) {
        this.title = tituloDoLivro;
        this.author = autorDoLivro;
        this.pages = pagsDoLivro;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}

let book = new Book("Harry Potter", "JK Rowling", 300);

console.log(book); //Retorna o objeto book -> Book { title: 'Harry Potter', author: 'JK Rowling', pages: 300 }
console.log(book.read()); //Retorna Estou lendo Harry Potter

class ITBook extends Book {
    constructor(tituloDoLivro, autorDoLivro, pagsDoLivro, tecnologiaDoLivro) {
        super(tituloDoLivro, autorDoLivro, pagsDoLivro);
        this.tecnologia = tecnologiaDoLivro;
    }
}

let itBook = new ITBook("Eloquent JavaScript", "M. Haverbeke", 450, "JavaScript");

console.log(itBook.read());

// class ITBook extends Book {
//     constructor(tituloDoLivro, autorDoLivro, tecnologiaDoLivro) {
//         super(tituloDoLivro, autorDoLivro);
//         this.tecnologia = tecnologiaDoLivro;
//     }
// }

// let itBook = new ITBook("Eloquent JavaScript", "M. Haverbeke", "JavaScript");

// console.log(itBook);

class Person {
    constructor(seuNome) {
        this._nome = seuNome;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

}

let person = new Person("Letícia");
person.nome = "Le";

console.log(person.nome);

const soma = (num1, num2) => {
    console.log("Parabéns! você somou");
    return num1 + num2;
    
}

soma(3, 4)

const sayHello = name => `Hello, ${name}`;

console.log(sayHello("Letícia"));

const doNothing = () => {
    return `I don't do anything`;
}

console.log(doNothing())

// for (i=0; i < alunasXp.length; i++) {
//     console.log(alunasXp[i]);
// }

// alunasXp.map(aluna => console.log(aluna))

const alunasGama = ["Letícia", "Paula", "Maria", "Clara"];
const alunasXp = [...alunasGama, "Simara"];

alunasXp.map(function(aluna) {
    console.log(aluna);
})

const numbers = [34, 45, 67, 90, 55, 76];

const oddNumbers = numbers.filter(function(number) {
   console.log(number % 2 !== 0);
}); 

console.log(oddNumbers)

const ages = [1, 7, 5, 23, 10];

console.log(ages.sort((a,b) => a - b))
console.log(ages.sort((a,b) => b - a))
console.log(ages.sort())

const nomes = ["leticia", "daniel", "gabriela", "tiago"]
console.log(nomes.sort());
console.log(nomes.reverse());

console.log(nomes);

const numbersTwo = [1, 34, 35];

const somaTwo = numbersTwo.reduce((acumulador, valorProcessado) => {
    return acumulador + valorProcessado;
});

console.log(somaTwo);

const sons = ["auau", "miau", "cócóricó"];
const sonsHtml = sons.reduce((acc, som) => {
  return (acc = acc + som);
  });

  console.log(sonsHtml)

const outrosNumeros = [1, 2, 3, 4];

const somadois = outrosNumeros.reduce((acc, som) => {
    return acc  = acc + som;
}, 1)

console.log(somadois)

const filmes = [
    {
        titulo: "Harry Potter",
        descricao: "bruxos",
        duracao: 120
    },
    {
        titulo: "Senhor dos Anéis",
        descricao: "fantasia",
        duracao: 400
    }
]

const [{titulo, descricao, duracao}] = filmes;

console.log(titulo) //retorna o primeiro titulo do array

filmes.map(filme => console.log(filme.descricao)); //retorna cada descricao do array de objetos.