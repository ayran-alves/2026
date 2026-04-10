 let nota = 4 
 if (nota >= 7) {
    console.log("Aprovado")
 }else if (nota >= 5) {
    console.log("Recuperação")
 }else {
    console.log("Reprovado")
 }
 console.log("------------------------------")
 let idade = Number(prompt("Qual sua idade ?"))
 if( idade >= 0 && idade <= 12 ) {
   console.log("criança")
 }else if( idade>12 && idade <=17) {
   console.log("Adolecente")
 }else if (idade > 17 && idade <= 55) {
   console.log("adulto")
 }else if (idade > 55 && idade <= 100) {
   console.log("Idoso")
 }else{
   console.log("idade invalida")
 }
 
 /* Em uma passeio escolar, os alunos são separados por
categoria, peça a categoria do aluno e:
- Se for categoria "A", diga "Ala leste"
- Se for categoria "B", diga "Ala oeste"
- Se for categoria "C", diga "Ala Sul"
- Se for categoria "D", diga "Ala Norte"
Para qualquer outra, diga "Categoria Invalida" */

let categoria = prompt ("Qual a categoria?")
if(categoria == "A") {
console.log("Ala Leste")
} else if (categoria == "B") {
console.log("Ala Oeste")
} else if (categoria == "C") {
console.log("Ala Sul")
} else if (categoria == "D") {
console.log("Ala Norte")
} else {
console.log("Categoria Inválida")
}

console.log("----------------------------")
/* peça dois numeros para o usuario e verifique se o 
- o primeiro é maior que o segundo
- o segundo numero é maior que o perimeiro 
- se eles saõ iguais   */

let num1 = Number(prompt("informe um numero"))
let num2 = Number(prompt("informe outro numero "))
if (num1 > num2) {
   console.log("O primeiro numero é maior ")
}else if (num2 > num1 ) {
   console.log("O segundo é maior que o primeiro")
}else {
console.log("eles são iguais")
}
   
