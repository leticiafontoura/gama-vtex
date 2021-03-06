//capturar os elementos HTML

const listContainer = document.querySelector("[data-list]"); //pegando a div fantasma onde vão guardar os itens da lista
const newListForm = document.querySelector("[data-new-list-form]"); //pegando o form
const newListInput = document.querySelector("[data-new-list-input]"); //pegando o campo de digitação

let lists = [];

newListForm.addEventListener("submit", function(e) {
    e.preventDefault(); //previne que o comportamento padrão do form (reiniciar a pagina qd clica em submit) aconteça
    const listName = newListInput.value; //atribuiu a const listName o valor do newListInput

    if (listName === null || listName === "") return; //se a listName estiver vazia, nada acontece

    const list = createList(listName); //função que cria lista e recebe como parametro o conteúdo de listName;
    newListInput.value = null; //depois que o item for adicionado, zera o valor do input
    lists.push(list); //adiciona o item criado em list no array lists;

    render();
});

function createList(name) {
    console.log({id: Date.now().toString(), name: name})
    return {id: Date.now().toString(), name: name};
    
};

function render() {
    clearElement(listContainer);
    lists.forEach(function(list) {
        const item = document.createElement("li");
        item.classList.add("item");
        item.innerText = list.name;
        listContainer.appendChild(item);
    })
};

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

/*

também daria pra fazer assim:

newListForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName === null || listName === "") return;
    newListInput.value = null;
    lists.push(listName);
    render();
});

e excluir a função createList


*/