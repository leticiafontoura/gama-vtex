# Log, status e show

## Branch

Um branch é uma ramificação de uma linha temporal. 

Existe a linha principal, chamada de **master, root, ou main**, e essa linha do tempo pode se dividir, ramificar em outras.

Como trabalhar com as branches?

Em um projeto, podem ter vários tipos de linha do tempo, com características próprias, como correção de bug, funcionalidade nova em desenvolvimento, alteração rápida que vai existir por pouco tempo, etc.

Exemplo, estamos trabalhando em uma loja virtual, e uma nova feature de lista de produtos será implementada. Para isso, vamos categorizar a nossa nova branch, para ficar mais claro.

`git branch feature/lista-produtos`

A branch foi criada. Agora, para entrarmos nessa nova linha do tempo, executa-se o comando:

`git checkout feature/lista-produtos`

Antes, quando eu estava trabalhando apenas com a branch main e eu executava `git status`, a mensagem era:

```
GAMA VTEX % git status
On branch main
```

Agora, como mudei de branch, ele também mostra em que branch estamos trabalhando:

```
GAMA VTEX % git status
On branch feature/lista-produtos
```

O comando `git reset` pode ser usado se, por exemplo, você deu `git add` (colocou o arquivo em stage) em algum arquivo e o arquivo está errado (texto errado, código, qualquer coisa).

Para resolver isso, basta colocar `git reset`. O arquivo então é removido de staging (como se desfizesse o git add).

As branches main e feature/lista-produtos, em teoria, ainda não se conhecem. Se dermos um `git checkout main` seguido de `git log`, não vamos visualizar o commit feito na branch feature/lista-produtos, o arquivo `lista-produtos.html` só existe na branch feature/lista-produtos.

Uma curiosidade/informação importante: ao sair de uma branch e voltar para a branch principal, se elas ainda não se comunicam, você vai perceber que até os arquivos criados DENTRO da branch "secundária" somem da pasta! Mas não se assuste, o arquivo ainda existe, só não na branch principal (AINDA).

Para unir as linhas do tempo, executamos o comando

`git merge feature/lista-produtos`

O que vamos ter de resposta no terminal é:

```
GAMA VTEX % git merge feature/lista-produtos
Updating 8ef8599..b37a12c
Fast-forward
 lista-produtos.html | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 lista-produtos.html
 ```

Ao darmos um `git status`:

```
GAMA VTEX % git status
On branch main
```

Vemos que estamos agora na branch main, com o arquivo da branch features adicionado a ela.

Executando um `git log`, vemos também que o commit realizado em feature/lista-produtos está agora na branch main.

```
GAMA VTEX % git log
commit b37a12cd295ddb77209a8f1cd4e29466531a9941 (HEAD -> main, feature/lista-produtos)
Author: Leticia Fontoura 
Date:   Sat Jun 26 14:44:16 2021 -0300

    lista de produtos
```

Para saber mais detalhes sobre um certo commit, basta copiar o código dele (encontrado em git log) e executar o comando:

`git show b37a12cd295ddb77209a8f1cd4e29466531a9941`

O que é exibido no terminal:

```
GAMA VTEX % git show b37a12cd295ddb77209a8f1cd4e29466531a9941
commit b37a12cd295ddb77209a8f1cd4e29466531a9941 (HEAD -> main, feature/lista-produtos)
Author: Leticia Fontoura 
Date:   Sat Jun 26 14:44:16 2021 -0300

    lista de produtos

diff --git a/lista-produtos.html b/lista-produtos.html
new file mode 100644
index 0000000..e69de29
```

Assim que a/as branch/es secundária/s não são mais necessárias, precisamos realizar a exclusão dela/s:

`git branch -D feature/lista-produtos`

```
GAMA VTEX % git branch -D feature/lista-produtos
Deleted branch feature/lista-produtos (was b37a12c).
```

E ao executarmos o `git branch`, ele vai mostrar apenas a/as branch/es existente/s no projeto:

```
GAMA VTEX % git branch
* main
```
