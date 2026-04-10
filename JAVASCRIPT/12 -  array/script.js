//array - vetor
let frutas = ["maça", "banana", "Laranja"]
            //  0        1            2
console.log(frutas)  

console.log("------------------------")
console.log(frutas [0]) //maça
console.log(frutas [2]) //maça
console.log(frutas [1]) //maça
console.log("------------------------")
//medir
console.log(frutas.length) //3
//length = tamanho
console.log(frutas[1].length) //6
let nome = "Curso tecnico de desenvolvimento de sistemas"
console.log(nome.length)//7

//adicionar
//push = adiciona no final
frutas.push("Uva")
frutas.push("Morango")
frutas.push(frutas)
//unshift = adiciona no começo
frutas.unshift("Abacaxi")
frutas.unshift("Manga")

// remover do final
frutas.pop()
console.log(frutas)
//shift = remove do inicio
frutas.shift()
console.log(frutas)
//splice = remove no meio
frutas.splice(1,1)

console.log(frutas)

//editar 
frutas[2] = "limão"
console.log(frutas)

//editar
//frutas[2] = "Limão"
//console.log(frutas)

//editar
frutas[2] = "Limão"
console.log(frutas)
console.log("-------------------")
//encontrar uma posição
console.log(frutas.indexOf("Abacaxi"))//0
console.log(frutas.indexOf("Abacaxi"))//2
console.log(frutas.indexOf("Abacaxi"))//-1
console.log("-------------------")
//varrer um vetor 
let amigos = ["Luana", "Rebeca", "Tatiane", "Felipe","ana"]
for (let i = 0; i < amigos.length; i++) {
    console.log(amigos[i])

}

    console.log("--------------------------")
    let alunos = []
    for(let i = 0; i < 5; i++) {
        alunos[i] = prompt("Qual o nome do aluno?")
    //let nome = prompt("Qual o nome do aluno ?")
    //alunos.push(nome)
    }
    for (let i = 0; i < alunos.length; i++) {
        console.log(alunos[i])

        console.log("-----------------------")
    }
       /* Crie um vetor de cores com 4 posições, depois coloque
mais 2 valores no final, tire o primeiro e mostre com for */

let cores = [ "Roxo", "Amarelo", "Vermelho", "Preto"]
cores.push("Roxo")
cores.push("Preto")
cores.shift()
for(let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}
console.log("--------------------")
/* Crie um vetor vazio de 5 notas, peça para o usuario preencher usando for, depois em outro for, mostre apenas as notas maiores que 7 */

let notas = []
for(let  i =  0 ; i < 5; i++) {
    notas [i] = Number(prompt("Qual a nota ?"))
}
for (let I = 0; I < notas.length; i++) {
    if (notas[i] > 7) {
        console.log(notas[i])
    }
} 


    

        
 
       