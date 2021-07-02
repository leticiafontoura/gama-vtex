# Objetos destructuring

Objetos são dados que são coleções de informações, formados pelo par `chave: valor`.

```javascript
const pessoa = {
    nome: "Letícia",
    idade: 26,
    altura: 1.52,
    cidade: "Campinas"
}

//notação de ponto para acessar os valores no objeto

pessoa.nome; //retorna Letícia
pessoa.idade; //26
pessoa.altura; //1.52
pessoa.cidade; //campinas

//notação de colchetes

pessoa["nome"] //retorna Letícia

//destructuring - desestruturando objetos

const {nome, idade, cidade} = pessoa; //essa é a desestruturação do objeto

console.log(nome) //Letícia
```

E se tivermos um array de objetos???

```javascript
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
```

Esse array é um array de objetos. É assim que encontramos estruturas de dados no dia-a-dia. Parece muito com um `json`, que é um tipo de documento que o back-end manda para consumirmos os dados.

E agora vamos desestruturar e iterar o array.

```javascript
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
```

Artigo sobre desestruturação de arrays e de objetos [aqui](https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/) :) 