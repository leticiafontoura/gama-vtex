# Classes

Classes em JS é uma forma de trabalhamos o conceito de `programação orientada a objetos`.

Usamos classes em JavaScript para criarmos templates de objetos JavaScript. Uma classe JS não é um objeto, mas sim um template para objetos JS.

```javascript
class Book {
    constructor(title, author, pages) {
        this.title = titles;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}

let book = new Book("Harry Potter", "JK Rowling", 300);

console.log(book); //Retorna o objeto book -> Book { title: 'Harry Potter', author: 'JK Rowling', pages: 300 }
console.log(book.read()); //Retorna Estou lendo Harry Potter
```

No exemplo acima, usamos a estrutura de classes para criarmos um modelo de um objeto. O metódo `constructor` é necessário na criação de um objeto, e o que é passado no `()` são as propriedades que o objeto terá. A palavra `this` é para dizer que estamos no escopo daquele objeto.

O `read()` parece com uma função, e é! Mas no caso de um objeto, seu nome passa a ser `método`. 

A criação de um objeto propriamente dito usando a classe/modelo criado se dá através da palavra `new` seguida do nome da classe/modelo, e o valor das propriedades. O `new` representa que um novo algo será criado, no caso, um novo objeto usando o modelo/classe Book.

A classe acima poderia ser escrita assim:

```javascript
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
```

O resultado será o mesmo.

Em se tratando de programação orientada a objeto, um dos seus pilares chama `herança`. E esse pilar também é aplicável aqui no JS, através das classes.

```javascript
class ITBook extends Book {
    constructor(tituloDoLivro, autorDoLivro, pagsDoLivro, tecnologia) {
        super(tituloDoLivro, autorDoLivro, pagsDoLivro);
        this.tecnologia = tecnologiaDoLivro;
    }
}

let itBook = new ITBook("Eloquent JavaScript", "M. Haverbeke", 450, "JavaScript");

console.log(itBook);
```

Como funciona a herança no código acima?

Através da palavra `extends`, estamos dizendo que a classe `ITBook` receberá uma extensão das propriedades da classe `Book`. 

E é no `super` que deixamos explícito as propriedades que vamos herdar da classe pai. 

No código abaixo, iremos encontrar um erro de console:

```javascript
class ITBook extends Book {
    constructor(tituloDoLivro, autorDoLivro, tecnologiaDoLivro) {
        super(tituloDoLivro, autorDoLivro);
        this.tecnologia = tecnologiaDoLivro;
    }
}

let itBook = new ITBook("Eloquent JavaScript", "M. Haverbeke", "JavaScript");

console.log(itBook);
```

A saída será:

```
ITBook {
  title: 'Eloquent JavaScript',
  author: 'M. Haverbeke',
  pages: undefined,
  tecnologia: "JavaScript"
}
```

A propriedade `pages` está como `undefined` porque nem no constructor da nova classe, nem no super, colocamos ela como parte integrante da nova classe. Ela continua sendo herdada, mas seu conteúdo, indefinido.

Outro conceito da POO é o `encapsulamento`. 

```javascript

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
```

O encapsulamento é como se deixamos certa informação `privada`, através do sinal de `_` antes do nome da propriedade.

Para termos acesso e podermos editar essa informação, usamos os chamados `getters` e `setters`.

Com o `get`, temos acesso/pegamos a propriedade.

Com o `set`, podemos definir um novo valor àquela propriedade.

*Nota: `getters` e `setters` podem servir para outros propósitos, não apenas envolvendo o encapsulamento de informações. Saiba mais [neste artigo](https://www.alura.com.br/artigos/as-classes-no-javascript) :)

Para mais informações sobre `super`e `extends`, clique [aqui](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420) e [aqui](https://css-tricks.com/what-is-super-in-javascript/) :)

Para aprender mais sobre Programação Orientada a Objetos com JavaScript, clique [aqui](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object-oriented_JS) :)