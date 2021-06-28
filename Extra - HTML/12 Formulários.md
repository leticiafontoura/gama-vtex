# Formulários

Principal meio de interação de informações na web.

No HTML, criamos através da tag `<form>`.

Existem atributos que precisam ser inseridos na tag para fazer com o formulário funcione efetivamente.

O atributo `action="url` informa para onde os dados inseridos serão enviados, armazenados.

O atributo `method=""` indica qual protocolo HTTP será utilizado. Existem as opções `GET`, que envia os dados já na URL, e `POST`, que envia os dados sem expô-los.

```
<form action="#" method="POST"> 

</form>
```

Depois, temos a tag `<label>`, que é como se fosse o "rótulo" de um campo a ser preenchido, seguido da tag `<input>`, que é o campo de entrada de dados.

Dentro da tag `<input>` podemos definir alguns atributos, como `"type="algo"`, onde será definido qual é o tipo de dado (texto, número, botão, dentre muitos outros), `name="algo"`, que é o nome do input e é ele que vai aparecer no banco de dados.

Podemos inserir em um form também a tag `<select>`, que é um seletor de opções.

```
<form action="#" method="POST"> 
    <label>Nome:</label>
    <input type="text" name="nome" />

    <label>Interesses:</label>
    <select name="interesses">
        <option value="1">Carros</option> //value é a informação que será enviada ao banco de dados.
    </select>

    <label>Carros</label>
    <input type="radio" name="interesse2" value="1" /> 
    <label>Action figure</label>
    <input type="radio" name="interesse2" value="2" /> 
    <input type="radio" name="interesse2" value="3" />  //aqui, os nomes precisam ser iguais para sabermos que estamos tratando da mesma informação, apenas alterando os valores.

    <label>Carros2</label>
    <input type="checkbox" name="interesse3" value="1" />
    <label>Sei la</label>
    <input type="checkbox" name="interesse3" value="2" />

    <input type="submit" value="Enviar o formulário" />
</form>
```

Formulários também possuem ferramentas de acessibilidade importantes.

Exemplo: você tem um campo onde irá digitar seu nome, e antes dele tem a especificação "Nome". Para fazer com que, clicando apenas em "Nome" o cursor do mouse já vá para o campo respectivo, fazemos:

```
<label for="camponome">Nome:</label>
<input type="text" name="nome" id="camponome"/>
```

Ou seja, damos um id para o campo nome, e no label, usamos o atributo `for` para especificar que aquele label é do campo X.

O elemento `<fieldset>` ajuda a agrupar elementos radio button ou checkbox.

```
<fieldset>
    <legend>Radio button</legend>
    <label for="campo31">Action figure</label>
    <input type="radio" name="interesse2" value="1" id="campo31"/> 
    <label for="campo32">Action figure</label>
    <input type="radio" name="interesse2" value="2" id="campo32"/> 
    <label for="campo33">Action figure</label>
    <input type="radio" name="interesse2" value="3" id="campo33" />
</fieldset>

<fieldset>
    <legend>Checkbox</legend>
    <label for="campo41">Action figure</label>
    <input type="checkbox" name="interesse2" value="1" id="campo41"/> 
    <label for="campo42">Action figure</label>
    <input type="checkbox" name="interesse2" value="2" id="campo42"/> 
    <label for="campo43">Action figure</label>
    <input type="checkbox" name="interesse2" value="3" id="campo43" />
</fieldset>
```

Para saber mais sobre formulários, clique [aqui](https://www.w3schools.com/html/html_forms.asp) :)