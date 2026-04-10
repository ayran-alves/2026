//Funçoes Declarativas
let a = 5
let b = 10
console.log(a+b)

let c = 54
let d = 17
console.log(c+d)

function soma() {
    let num1 = Number(prompt("Qual o primeiro número"))
    let num2 = Number(prompt("Qual o segundo número"))
    console.log(num1+num2)
}
soma() //chamando a função
soma()
soma()

function saudacao () {
    console.log("Bom dia ")
}
saudacao()
console.log("---------------------------------")
function inicializacao() {
    let nome =  prompt("Qua seu nome ")
    console.log("Bem vindo ", nome)
}
inicializacao()
 /* um escola solicitoui um sistema  de aprovação de alunos crie uma funçãõ, peça duas notas para o usuario, calcule a media e se for igual ou maior a 7 , mostre "Aprovado" senão mostre "Reprovado" cahem a função dusa vezes */

function escola() {
    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let media = (nota1 + nota2) / 2;
    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}
escola()
escola()
    
 /* Foi solicitado um sistema para classificar a pontuação
de um jogo. Crie uma função, pergunte a pontuação e, se
for maior ou igual a 3000, mostre "vencedor", se for
maior a 2200, mostre "segundo lugar", se for maior ou
igual a 1800, mostre "terceiro lugar", senão mostre, "não
foi dessa vez" */

function pontuacao() {
    let pontuacao = Number(prompt("Qual Foi sua pontuação"))
    if(pontuacao >= 3000){
        console.log("Vencedor")
    }
    if(pontuacao >= 2200) {
        console.log("Segundo lugar")
        if(pontuacao >= 1800){
            console.log("Terceiro lugar")
        } else {
            console.log("Não foi desta vez")
        }

    }
}

