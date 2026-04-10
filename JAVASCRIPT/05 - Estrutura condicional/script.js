// Estrutura Condicional


let nota = 7 
if(nota >= 7 ) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
console.log("----------------------------")

let idade = Number(prompt("Qual a sua idade ?"))
if(idade >= 18) {
    console.log("Você pode tirar a habilitação")
}else{
    console.log("Idade insuficiente")
}

console.log("----------------------------")
let salario = Number(prompt("Qual o seu salario ?"))
let anos = Number(prompt("Quantos anos você trabalha na empresa ?"))
if(salario <= 3000 && anos >=2) {
    console.log("você tera um aumento")
} else {
    console.log("Ainda não")
}
console.log("----------------------------")
let chuva = false
if (chuva) {
    console.log("Levar guarda-chuva")
}else{
    console.log("Não precisa levar o guarda-chuva")
}
console.log("----------------------------")

/* Peça dois numeros para o usuario e veja se o primeiro é menor que o segundo, se sim, mostre "o primeiro é menor", senao, mostre o "segundo é menor ou eles são iguais*/

let num1 = Number(prompt("Informe um numero"))
let num2 = Number(prompt("informe outro numero "))
if( num1 < num2) {
    console.log("O primeiro é menor")
}else{
console.log("o segundo é menor ou eles são iguais")

}

console.log("----------------------------")

/*Peça um numero para  o usuario e diga se o numero é impar ou par  */

let numero = Number(prompt("diga um numero ?"))
let aux = numero % 2
if(aux == 0 ) {
console.log("é par")
}else{
console.log("é impar")

}
console.log("----------------------------")

/* Uma loja da descontos para clientes com base no valor
da compra, peça o valor da compra, se ele for maior ou
igual a R$250, de R$50 de desconto, e mostre o novo
valor que sera pago, senao, mostre apenas "sem desconto"*/

let  valor1 =  Number(prompt("Qual o valor da compra ?"))
if(valor1 >= 250) {
    let valor2 = valor1 - 50
console.log(" você devera pagar: ", valor2)
} else {
    console.log("Sem desconto")
}