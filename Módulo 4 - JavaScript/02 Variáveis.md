# Variáveis

Variáveis são como caixinhas que guardam alguma coisa nelas.

No caso do JS, variáveis são locais onde armazenamos dados.

Uma variável é declarada da seguinte forma:

`var nomeDaVariavel = valorDaVariavel`

A palavra reservada `var`, seguido do nome que você quer dar para a sua variável (mais sobre nomenclatura [aqui](https://javascript.info/variables)), o sinal de `=`, que significa atribuição, e o valor da variável.

Na versão mais recente do JavaScript, surgiram outras duas nomenclaturas para variáveis: `let` e `const`. Mas qual a diferença entre os três?

`var` tem escopo global. Isso significa que, se eu declarar uma variável com `var` dentro de um escopo definido, ainda assim poderei acessá-la fora do escopo desse escopo.

```javascript
{
    var nomeMeu = "leticia";
}

console.log(nomeMeu);
```

`var` também pode ter seu valor reatribuído, afinal, é uma `variável`.

Ou seja:

```javascript

var mesAtual = "junho";

mesAtual = "julho";
```

é totalmente válido.

A declaração através de `let` é muito similar à `var`, mas `let` já não possui escopo global, por exemplo.

`const` é a mais diferente de todas, pois além de não ter escopo global, também não pode ter reatribuição de valor, pois ela se comporta como uma `constante`. `const` também precisa ter o seu valor declarado ao declarar sua existência. `var` e `let` podem ser declaradas sem um valor a princípio:

```javascript

var umAno;
let doisAnos;
```

Já `const` precisa que o valor seja atribuído imediatamente:

```javascript
const anoAtual = 2021;
```

Mais sobre variáveis [aqui](https://www.w3schools.com/js/js_variables.asp) :)