// laço de repetição
let i = 1 
while (i <= 5) {
    console.log(i)
    i++
}
console.log("--------------------------------------")
let resposta = prompt("Deseja acessar o sistema ? ")
while(resposta == "Sim") {
    console.log("Bem vindo ao sistema")
    resposta = prompt(" Deseja acessar o sistema ?")
}

let senha = prompt("Digite sua senha")
while(senha != "Senai2026") {
    senha = prompt("Senha incorreta . tente novamente")
}
console.log("Acesso liberado")
console.log("----------------------------------------")


// usando && e || 
let nota =Number(prompt("Digite uma nota de 0 a 10"))
while(nota <0 || nota >10) {
    nota = Number(prompt("Valor invalido. digite novamente :"))

}
console.log("Nota valida" , nota)

/* Peça para o usuario 3 numeros , some eles e mostre o resultado da soma */

let soma = 0 
let aux = 1
while (aux <= 3) {
    let numero = Number(prompt("Digite um numero"))
    soma = soma + numero

    aux++
}
console.log("O resultado é ", soma)

/* Peça para o usuário as credenciais de acesso, enquanto
as credenciais nao forem iguais a login == "TDS2" e a
senha == "senai", continue perguntando*/

let  login = (prompt("Informe O login"))
let senha1 = (prompt("Digite a senha"))
while(login != "TDS2" &&  senha != "Senai"){
login = prompt("Informe O login")
senha1 = prompt("Digite a senha")
}
console.log("Pode acessar")


