# Tags e atributos

Através de tags fazemos a criação de elementos na página HTML. 

Grande parte das tags possuem uma estrutura de abertura `<nomedatag>` e fechamento `</nomedatag>`. Exemplo:

`<p>Conteúdo que será renderizado no navegador</p>` <- tudo isso é um **elemento HTML**.

Existem tags que não possuem o par de fechamento, como por exemplo, a tag de imagem `<img />`. Dentro dessa tag, adicionamos os chamados atributos, que seriam propriedades daquela tag, representados por `atributo="valor"`. 

**Elementos aninhados** é quando  temos um elemento dentro de outro. Exemplo:

```
<p>Para acessar o google,
    <a href="https://www.google.com>clique aqui.</a>
</p>
```

## Diferença entre ID e CLASS

Os atributos ID e CLASS servem para identificação de algo.

A diferença é que o `id` é único, como se fosse o número de identidade de uma pessoa. Ninguém tem uma identidade igual a de outra pessoa, certo? Então usaremos o `id` para identificar um elemento único na página.

Já o `class` é utilizado para identificar um grupo de elementos. Digamos, temos um grupo de pessoas com a característica de todas terem tatuagens. Usaremos a `class="tatuagem"` para todas elas.

## Adicionando comentários em HTML

`<!-- Aqui tem um comentário -->` <- é dessa forma que realizamos comentários dentro do HTML. Ele não é visível na página em si, apenas no código-fonte. Comentários são importantes para ajudar os desenvolvedores a organizar o código etc.

## Estrutura básica de uma página HTML

Todo arquivo HTML começa com uma declaração DOCTYPE. DOCTYPE não é uma tag HTML, mas sim uma declaração que indica ao navegador qual a versão do HTML da página.

Depois, existe a tag `<html>`, que é um container em que todos os elementos ficarão.

Após, temos a tag `<head>`, que engloba informações que são importantes para o navegador, para mecanismos de buscas, robôs de indexação de conteúdo etc. Nela definem-se título, descrição, quais arquivos de html/css que serão utilizados, dentre outros.

Na sequência, temos a tag `<body>`, e dentro dela terão todos os elementos que são exibidos pelo navegador ao renderizar a página.

```
<!DOCTYPE html>
<html>
    <head>
    ...
    </head>
    <body>
    ...
    </body>
</html>
```

