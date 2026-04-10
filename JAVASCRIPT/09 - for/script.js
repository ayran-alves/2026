// Laço de repetição - For
console.log("Bom dia")
console.log("Bom dia")
console.log("Bom dia")
console.log("Bom dia")
console.log("Bom dia")


let contador = 0 
for(let i = 0; i <4; i++) {
console.log("Bom dia usando for")
}

console.log("-------------------------")

for (let i = 1; i < 6; i++) {
    console.log(i)
}

console.log("-------------------------")

// contagem regressiva

for(let i = 10; i >=1; i--) {
    console.log(i)
}

console.log("-------------------------")

//peça 5 valores para o usuário e verifique se é maior que 10 ou não
for(let i = 1; i <= 5; i++) {
let numero = Number(prompt("Informe um numero") )
if (numero > 10) {
console.log("é maior que 10")
} else{ 
   console.log("não é maior que 10") 
}
}
console.log("-------------------------")
let soma = 0 
for( let i = 1; i <= 3; i++ ) {
    let numero =Number(prompt("Digite um numero"))
    soma = soma + numero
    console.log(soma)
}
console.log("O resultado final é: " , soma)

console.log("-------------------------")

// 1

let tabuada = Number(prompt("Informe um numero"))
for(let i = 1; i <= 10; i++ ) {
    let resultado = valor * i
    console.log(valor, "x," , i , "=", resultado)
}   

console.log("-------------------------")

/* Em um passeio escolar , um grupo de cinco alunos são organizados de acordo com o numero que receberam. se o numero for maior ou a 10 diga "Grupo A", senão, diga grupo B  */


for(let i =1; i <= 5;   i++  ) {
let numero = Number(prompt("Informe um numero"))
if ( numero >= 10){
    console.log("Grupo A")
}else{
    console.log("Grupo B")
}
}

