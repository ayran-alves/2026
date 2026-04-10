/* 1 - Dobro de um Número */
let dobro = function ( nu1) {
    return nu1  * 2
}
let nu1 = Number(prompt("Qual o numero ?"))
console.log(dobro(nu1))

console.log("--------------------------------")

/* 2 */
let  somar =  (num1, num2) => {
    return num1 + num2
}
let num1 = Number(prompt("Informe o primeiro numero "))
let num2= Number(prompt("Informe o segundo numero "))
console.log(somar(num1,num2))


console.log("--------------------------------")

/* 3 */

 let quadrado = (numero) => {
    return numero * numero
 }
 let numero = Number(prompt("Qual é o numero "))
 console.log(quadrado(numero))

 console.log("--------------------------------")


 /* 4 */
 let sucessor = (nume1) => {
    return nume1  + 1 
 }
 let nume1 = Number(prompt("Qual o numero ?"))
 console.log(sucessor(nume1))

 console.log("--------------------------------")

 /*5 */
 let maiorNumero =  (numero1, numero2)  => {
    if( numero1 > numero2 ) {
        return "Numero 1 maior "
    } else  if ( numero2 > numero1) {
        return "Numero 2 é maior "
    }
        
 } 
 let numero1 = Number(prompt("Qual o primeiro Numero "))
 let numero2 = Number(prompt("Qual o segundo Numero "))
 console.log(maiorNumero(numero1,numero2))

 console.log("--------------------------------")

 /* 6 */

let imparOupar =  (numero3) => {
    let aux = numero3 % 2
    if (aux == 0 ) {
        return "Par"
    } else {
        return "Impar"
    }
}

let num = Number(prompt("Informe o numero"))
console.log(imparOupar(numero3))
 
console.log("--------------------------------")

/* 7 */

let verificarNumero = (nume) => {
  if(nume > 0 ) {
    return "Positivo"
  } else if ( nume < 0 ) {
    return "Negativo"
  } else {
    return "Zero"
  }
}
let nume = Number(prompt("Qual é o numero ?"))
console.log(verificarNumero(nume))
console.log("--------------------------------")

/* 8  */
let media = (nume2,nume3,nume4) => {
   let media = (nume2 + nume3 + nume4) / 3
   return media
}
let  nume2 = Number(prompt("Informe o primeiro numero"))
let  nume3 = Number(prompt("Informe o segundo numero"))
let  nume4 = Number(prompt("Informe o terceiro numero"))
console.log(media(nume2,nume3,nume4))

console.log("--------------------------------")

/* 9  */
let calcularDesconto  =  (preco) => {
   let aux =  preco * 0.20
   return preco - aux
 
}
let  preco = Number(prompt("Qual o preço ?"))
console.log(calcularDesconto(preco))

console.log("--------------------------------")


/* 10 */
let verificarAprovacao = (nota1,nota2) => {
    let media = (nota1 + nota2) / 2
    if(media >= 7) {
        return "Aprovado"
    } else if (media >= 5 && media < 7) {
        return "Recuperação"
    }  else if (media < 5 ) {
        return "Reprovado"
    }
}
let nota1 = Number(prompt("informe a primeira nota"))
let nota2= Number(prompt("informe a segunda nota"))
console.log(verificarAprovacao(nota1,nota2))