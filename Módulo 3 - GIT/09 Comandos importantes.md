# Comandos importantes

`git init`

inicia um repositório git local

`git add <nomedoarquivo>` 

adiciona arquivos nesse repositório local. ele tem uma variação interessante que é o `git add .`, que adiciona TODOS os arquivos da pasta, não apenas um específico

`git commit -m "mensagem"` 

um commit é você "guardar" todas as alterações feitas em determinado/s arquivo/s. ele gera um número identificador, que pode ser acessado posteriormente pelo `git log`, e com ele é importante deixar sempre uma pequena explicação do que foi feito naquele commit específico

`git push -u origin <nomedabranchremota>`

esse comando serve para enviar as alterações em commit para o repositório remoto

`git clone <urldorepositorioremoto>` 

clona um repositório remoto para sua máquina

`git pull` 

sincroniza o repositório local com possíveis alterações no repositório remoto

`git branch <nomedabranchnova>` 

cria uma nova branch no projeto

`git merge`

une as branches do projeto

`git checkout <nomedabranch>`

entra na branch que você especificar

`git rm --cached`

remove algum arquivo commitado que você não quer mais que o git trackeie. ele não remove o arquivo do repositório local.

`git rm <arquivo>`

remove o arquivo de tudo, até da maquina

`git reset HEAD`

desfaz a última alteração

`git restore <nome do arquivo`

usado após o `git reset HEAD`, ele recupera o arquivo deletado da máquina

`git log`

mostra todos os commits feitos

`git status`

mostra o status atual do repositório. arquivos que estão ou não sendo trackeados, que tiveram alteração mas não foram commitados, etc

:D
