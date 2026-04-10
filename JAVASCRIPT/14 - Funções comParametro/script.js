// Funções com parametro

//declarativa
function saudacao() {
    let nome = prompt("Qual seu nome ")
    console.log("Bom dia ", nome)
}
saudacao() //chamando função

//declarativa com parametro

function saudacao2(nome2) {
    console.log("Bom dia", nome2)
}
let nome2 = prompt("Qual seu nome ?")
saudacao(nome2)

// somar dois números
 function soma(num1 , num2 ) {
    let soma = num1 + num2
    console.log("A soma é ", soma) 
 }
//  let num1 = Number(prompt("Informe um numero "))
//  let num2 = Number(prompt("Informe outro numero "))
//  soma(num1,num2)

function maioridade(idade) {
    if (idade >= 18 ) {
        console.log("Maior de idade")

    } else {
        console.log("Menor de idade")
    }
}
maioridade(20)
maioridade(10)
maioridade(16)
console.log("------------------------------")
/* peça um numero para o usuario, crie um função e calcule o dobro e mostre o resultado */
 
function dobro(numero) {
    let  dobro = numero * 2
    console.log("O dobro é ", dobro)
}
let numero = Number(prompt("Digite um numero"))
dobro(numero)

/*  Uma empresa solicitou um sistema de aumento para os funcionarios, crie uma função que rece um salario, se ele for menor que 2500, de 500 reais de aumento e mostre o novo salario, senão, apenas mostre , "sem aumento" */


function aumento(salario) {
    
    if (salario < 2500) {
        let salarioNovo = salario + 500
        console.log(" novo salario é ",salarioNovo)
    } else {
        console.log("Sem aumento")
    }


}
let salario = Number(prompt("Qual o salario"))
aumento(salario)


/* Crie um função para controle de alunos, a função deve mostar o nome, idade , e o curso que faz no senai */

function Alunos( nome, idade , curso) {
console.log(nome,"tem" , idade, "Anos e cursa",curso)

}
let nome = prompt("Qual o seu nome ?")
let idade2 = Number(prompt("Qual sua idade ?"))