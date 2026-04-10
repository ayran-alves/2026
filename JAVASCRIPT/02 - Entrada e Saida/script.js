// Operadores Aritmeticos

let numero1 = 5;
let numero2 = 7;
let soma = numero1 + numero2
let subtracao = numero1 - numero2 
let divisao = numero1 / numero2 
let multiplicacao = numero1 * numero2 
let modulo = numero1 % numero2 //resto da divisão

console.log ("A soma é: " + soma)
console.log("A subtração é: " + subtracao)
console.log("A multiplicação é: " + multiplicacao)
console.log("A divisaõ é: " + divisao)
console.log('o resto da divisaõ é  ${modulo}')

let contador = 10 
contador++ //+1
console.log(contador) //11
contador++ //-1
contador +=5 //15
contador -=2 //13
//------------------------------------

let salario = Number(prompt("qual o seu salario ?"))
let total = salario + 100
console.log(total)

/*um grupo de amigos foi a um restaurante, no final eles decidiram dividir a conta. faça um programa que peça a quantidade de amigos e o valor da conta e mostre quanto cada um deve pagar*/

let amigos  = Number(prompt("Qual é a quantidade de amigos ?"))
let conta = Number(prompt("Qual o valor da conta ?"))
let total1 =  conta/amigos
console.log(total1)

/*um grupo de tres amigos quer juntos  comprar uma pizza, cada um ira contribuir com uma quantia de valor. faça um programa que receba quanto cada amigo ira contribuir e mostre qauto cada amigo ira contribuitr e mostre quanto eles tem juntos*/

let amigo1 = Number(prompt("Quanto o amigo1 tem ?"))
let amigo2 = Number(prompt("Quanto o amigo2 tem ? "))
let amigo3 = Number(prompt("Quanto o amigo3 tem ?"))
let total2 =  amigo1 + amigo2 + amigo3
console.log(total2)


/*uma loja de doces vende produtos em grande quantidade, um cliente resolveu comprar um produtgo. faça um program que pela a quantidade do produto comprado, o valor unitario e mostre qaunto o cliente vai pagar */

let produto = Number(prompt("Qual é a quantidade do produto Comprado ?"))
let VU = Number(prompt("qaul o valor unitario ?"))
let total3  =  produto * VU
console.log(total3)
