# Acessibilidade na web

Existem 4 tipos de acessibilidade:

1. Perceptível  
2. Operável
3. Compreensível
4. Robusta

## Especificações ARIA

Role: definem o que um elemento é ou faz.

State: propriedades especiais que definem condições atuais dos elementos.

Properties: descreve a relação com outros elementos e eles não mudam uma vez que são definidos. 

O `aria-labelledby` serve para fazer uma relação entre um elemento e outro através de `id`.

Exemplo:

```
<img src="babyoda.jpg" alt="Baby Yoda" aria-labelledby="baby-yoda"/>
<p id="baby-yoda>O baby yoda é um personagem da série The Mandalorian [...] </p>
```

Com isso, dizemos ao navagador que aquela imagem tem relação àquele parágrafo.

## Landmarks

São pontos de referência que ajudam a identificar regiões de alto nível da página. Podem ser definidos através de tags semânticas (header, nav, section, footer, etc) ou pelo atributo `role="algo"`.

```
<header role="banner">
    <nav role="navigation">
        <ul role="menu">
            <li>
                <a role="menuitem"></a>
            </li>
            ...
        </ul>
    </nav>
</header>
```

## Linguagem, texto e elementos

Utilizar o atributo global `lang` para indicar qual a linguagem da página.

`<html lang="pt-br">`

`<p lang="en">`

Utilizar o atributo `aria-label` para descrever o que tal elemento faz.

`<button aria-label="Acesse o site para saber mais sobre qual coisa">Saber mais</button>`

## Tabelas

Atributo `abbr` dentro das tags `<th>`. Faz um "encurtamento" do título, para facilitar para leitores de tela, por exemplo.

```
<th abbr="Empresa">Nome da empresa</th>
<th abbr="Trabalhadores">Número dos trabalhadores</th>
<th abbr="Funcação">Ano de fundação</th>
```

O atributo `summary` é utilizado para resumir do que a tabela se trata.

`<table summary="Essa tabela serve para mostrar nomes de alunos em uma sala de aula>`

## Imagens

O atributo `alt` traz uma descrição do que se trata a imagem.

Mais sobre acessibilidade HTML [aqui](https://www.w3schools.com/html/html_accessibility.asp) :)

Mais sobre labels de acessibilidade [aqui](https://www.w3schools.com/accessibility/accessibility_labels.php) :)

Mais sobre landmarks [aqui](https://www.w3schools.com/accessibility/accessibility_landmarks.php) :)

Mais sobre abbr tag [aqui](https://www.w3schools.com/tags/tag_abbr.asp) :)

Mais sobre escopo em tabelas aqui [aqui](https://www.w3schools.com/tags/att_th_scope.asp) :)

