# Tabelas

Tabelas em HTML são criadas pela tag `<table>`. Depois, precisamos trabalhar com as três áreas de uma tabela:

- cabeçalho, criado pela tag `<thead>`
- corpo, criado pela tag `<tbody>`
- rodapé, criado pela tag `<tfoot>`

Toda linha criada em uma tabela se dá pela tag `<tr>`, e no caso do cabeçalho, as células são criadas pela tag `<th>`.

Dentro do corpo, as linhas continuam sendo criadas pela tag `<tr>`, mas as células agora passam a ser criadas pela tag `<td>`.

No rodapé, as linhas também seguem com a cruação da tag `<tr>` e as células com a tag `<td>`.

```
<table>
    <thead>
        <tr>
            <th>Mês</th>
            <th>Nome da atividade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Janeiro</td>
            <td>Leitura</td>
        </tr>
        <tr>
            <td>Fevereiro</td>
            <td>Yoga</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total de atividades</td>
            <td>2 atividades</td>
        </tr>
    </tfoot>
</table>
```

Como fazer merge/mesclagem entre colunas e linhas? 

Para isso, usamos alguns atributos.

`colspan="n"` - utilizando esse atributo em uma td, estamos dizendo que aquela célula vai assumir o tamanho de N colunas.

`rowspan="n"` - faz a mesma coisa que o `colspan`, mas agora a mesclagem é em linha, não em célula, então aquela `<td>` irá ocupar o espaço de duas linhas.

```
<table>
    <thead>
        <tr>
            <th>Mês</th>
            <th>Nome da atividade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="2">Janeiro</td>
        </tr>
        <tr>
            <td>Fevereiro</td>
            <td rowspan="2">Yoga</td>
        </tr>
        <tr>
            <td>Março</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total de atividades</td>
            <td>2 atividades</td>
        </tr>
    </tfoot>
</table>
```

Para aprender mais sobre tabelas, clique [aqui](https://www.w3schools.com/html/html_tables.asp) :)