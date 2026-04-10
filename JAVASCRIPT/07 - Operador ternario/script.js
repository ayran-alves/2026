let idade = 18 
let situacao 
if (idade >= 18) {
situacao = "Maior de idade"
}else{
    situacao = "Menor de idade"
}
console.log (situacao)
console.log("----------------------------------")
let idade2 = 18 
let situacao2 = idade2 >= 18? "Maior de idade" : "Menor de idade"

console.log(situacao2)
console.log("----------------------------------")

let  nota =  Number(prompt("Qual sua nota?"))
let  resultado = nota >= 7? "Aprovado" : "Reprovado"
console.log(resultado)

/* if (nota>=7) {
resultado = "Aprovado"
} else {
resultado = "Reprovado"
}*/
console.log("--------------------")

let acesso = prompt ("Qual seu acesso?")
let entrada = acesso == "admin" ? "Acesso total" : acesso == "prof" ? "pode lançar notas" : "apenas leitura"
console.log(entrada)


console.log("----------------------------------")

/* Peça uma temperatura para o usuário, se ela for maior
ou igual a 30, mostre "Está Calor", senão, "Não está
Calor" */

let temp = Number(prompt("Qual é a temperatura ?"))
let  situacao3 =  temp >= 30 ? "esta calor" : "Não esta calor"
console.log(situacao3)

console.log("----------------------------------")

/* peça um numero para o usuartio e diga se ele é positivo ou negativo ou se é zero */



let numero1 = Number(prompt("Informe um numero "))
let situação4 = numero1 >=  1 ? "Positivo" : "Negativo"
console.log(situação4) 

console.log("----------------------------------")

/* Peça uma média para o usuário e classifique:
- Excelente, para média maior ou igual a 9
- Bom, para média maior ou igual a 7
- Regular, para média maior ou igual a 5
- Reprovado, caso contrário */

let media = Number(prompt("Qual é a media ?"))
let situacao5 = media >= 9 ? "Exelente" : media >= 7 ? "Bom" : media >= 5 ? "Regular" : "Reprovado"
console.log(situacao5)





