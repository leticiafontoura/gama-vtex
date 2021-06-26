# Comandos init, add e commit

Após a instalação do git na máquina, acesse a pasta do seu projeto pelo terminal, e escreva o comando:

`git init`

Esse comando cria uma pasta `.git` na pasta do seu projeto. Essa pasta armazena tudo relacionado ao repositório criado: objetos, commits etc.

Após iniciar o repositório na pasta com o `git init`, precisamos adicionar os arquivos que você quer para o git passar a olhar esses arquivos, através do comando:

`git add <nome do arquivo>`

Uma vez adicionado, é preciso fazer um `commit`, que é como se você criasse uma marca no arquivo que é jogada na linha do tempo do git.

`git commit -m "mensagem do commit"`

Agora, no repositório já existe uma linha do tempo sobre o arquivo adicionado.

O comando `git log` mostra informações desse commit e de commit anteriores, as mensagens executadas etc.

Se qualquer alteração é feita nesse arquivo, utiliza-se o commando `git status` para saber se houve de fato alguma modificação, em qual arquivo etc.

Se não houve um commit ainda nesse arquivo (ou seja, a marca nesse arquivo na linha do tempo), o `git status` mostra isso também.

`git add <nome do arquivo>`

`git commit -m "mensagem"`

Agora, ao executar o `git log`, mostrará todo o histórico de alterações naquela linha do tempo.

`Obs: para sair do git log, basta apertar o Q do teclado`