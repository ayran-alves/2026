//js
function adicionar () {
    let tarefa = document.getElementById("tarefa").value
    let lista = document.getElementById("lista")


    //Avisar se a tarefa tiver vazia
    if(tarefa == "") {
        alert("digite uma tarefa")
    }


// criar o <li>
let novoItem = document.createElement("li")
novoItem.innerText = tarefa

// Adiconando o <li> no site 
lista.appendChild(novoItem)

}