# Listas

Existem três tipos de listas em HTML: desordenadas, ordenadas e definição.

## Desordenadas

```
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
<ul>
```

A renderização será:

- Item 1
- Item 2

## Ordenadas

```
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
</ol>
```

A renderização será:

1. Item 1
2. Item 2

É possível personalizar, na lista ordenada, em qual numeração você quer que ela comece através do atributo `start`. 

```
<ol start="6">
    <li>Item 1</li>
    <li>Item 2</li>
</ol>
```

Assim, a renderização será:

6. Item 1
7. Item 2

## Definição

```
<dl>
    <dt>Palavra Café</dt>
    <dd>Café é uma bebida geralmente bebida quente</dd>
<dl>
```

A renderização será:

Palavra Café

    Café é uma bebida geralmente bebida quente

Mais sobre listas desordenadas [aqui](https://www.w3schools.com/tags/tag_ul.asp) :)
Mais sobre listas ordenadas [aqui](https://www.w3schools.com/tags/tag_ol.asp) :)
Mais sobre listas de definição [aqui](https://www.w3schools.com/tags/tag_dl.asp) :)
