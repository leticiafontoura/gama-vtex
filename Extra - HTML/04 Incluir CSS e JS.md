# Incluir CSS e JS

Ainda dentro da tag `<head>`, podemos incluir CSS e JS na página.

Existem duas formas:

```
<style type="text/css>
    body {
        background-color: black;
    }
</style>
```

Ali, definimos que o fundo da nossa página será da cor preta.

A outra forma de incluirmos CSS é através da tag `<link>`, que adiciona um arquivo externo, que esteja seja na pasta do seu projeto ou na web.

```
<link rel="stylesheet" type="text/css"> href="caminhoDoArquivo.css ou URL do arquivo" />
```

Para adicionar arquivos JS, também existem duas formas.

Também dentro da tag `head`:

```
<script type="text/javascript">
    alert("olá, mundo")
</script>
```

Para adicionar um arquivo externo:

```
<script type="text/javascript" src="script.js ou URL"></script>