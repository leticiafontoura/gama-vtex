# Clone e Pull

O comando `git clone <endereço do repositório remoto>` é uma forma de você clonar/fazer uma cópia de um repositório remoto no seu computador.

Para criar uma branch nova e já entrar nela, existe o comando `git checkout -b nomedabranch`. Diferente do `git branch nomedabranch` +  `git checkout nomedabranch`, com o `git checkout -b nomedabranch` é como se os dois passos se unissem em um só.

O comando `git commit -am "mensagem"` é uma forma simplificada dos passos `git add` e `git commit -m ""`

Existem casos que ocorrem alterações de um mesmo arquivo em branches diferentes. Ao tentar dar merge nas branches, teremos uma mensagem de erro. Você meio que precisa escolher qual das alterações (em qual branch) é a "verdadeira" e excluir as outras, para então corrigir o problema.

É importante que, quando trabalhando com branches, sejam commitadas sempre pequenas alterações ao invés de desenvolver todo o programa e só depois dar o commit.

Usando o identificador de commit, também é possível voltar no tempo naquele arquivo com o comando `git checkout identificador`.

`git checkout ffef1cf44a66f4d7e15457c56c10b0ab3f8604a7`

Ao verificar o arquivo, verá que as alterações recentes serão descartadas e o arquivo voltará ao estado em que era no commit ffef1cf44a66f4d7e15457c56c10b0ab3f8604a7.

Para voltar à ultima alteração, basta dar `git checkout main`, e você voltará a branch principal. :) 

O github permite que arquivos possam ser editados no repositório remoto (no próprio github). Como pegar essa alteração para o repositório local?

Com isso, atualizamos o nosso repositório local através do comando `git pull`. Esse comando vai até o repositório remoto, pega as alterações e traz ao repositório local.
