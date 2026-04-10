/*1  */

function dobro (numero) {
    let resultado = numero * 2
    return resultado
}
let numero = Number(prompt("Informe um numero"))
console.log(dobro(numero))

//2
function somar (n1 , n2) {
    let resultado1 = n1 + n2 
    return resultado1
}
let n1 = Number(prompt("Informe o primeiro numero"))
let n2 = Number(prompt("Informe o segundo  numero"))
console.log(soma(n1,n2))

//3
function areaQuadrado (val1, val2) {
    let resultado2 = val1 * val2
    return resultado2
}
let val1 = Number(prompt("Qual o valor 1"))
let val2 = Number(prompt("qual o valor 2"))
console.log(val1 ,val2)


//4 
function antecessor (num1) {
    return (num1 - 1) 
}
let num1 = Number(prompt("Informe um numero"))
console.log(antecessor(num1))



//5
function tamanhoTexto(texto) {
    return texto.length
}
let texto = prompt("Digite uma frase")
console.log(tamanhoTexto(texto)) 

console.log("-------------------------------")



//6
function MaiorNumero(numero1, numero2) {
    if( numero1 > numero2) {
        return "numero 1 maior que numero 2 "
    } else {
        return "numero 2 maior que numero 1"
    }
}
let numero1 = Number(prompt("Informe o primeiro numero"))
let numero2 = Number(prompt("Informe o segundo numero"))
console.log(MaiorNumero(numero1, numero2))



// 7
 function verificarIdade (idade) {
    if ( idade > 18 ) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
 }
 let  idade = Number(prompt("Qual é a idade ?")) 
 console.log(verificarIdade(idade))


 //8

 function parOuImpar (num2) {
    let num3 = num2 % 2
 if (num3 == 0 ) {
    return "par"
 } else {
   return "Impar"
 }
 

 }

 let  num2 = Number(prompt("Informe um numero"))
 console.log(parOuImpar(num2))

  
 //9
function media(nu1, nu2, nu3) {
    let media = (nu1 + nu2 + nu3) / 3
    return media
}
let nu1 = Number(prompt("Primeira Nota"))
let nu2 = Number(prompt("Segunda Nota"))
let nu3 = Number(prompt("Terceira Nota"))
console.log(media(nu1, nu2, nu3))

console.log("-------------------------------")

//10
function calcularDesconto(preco) {
    let desconto = preco * 0.10
    return preco - desconto
}
let preco = Number(prompt("Qual o preço do produto?"))
console.log(calcularDesconto)(preco)