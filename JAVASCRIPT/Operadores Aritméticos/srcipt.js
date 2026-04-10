/* Declare duas variáveis numéricas e exiba*/

let numero1 = 10
let numero2 = 10
let soma = numero1 + numero2
console.log(soma)
let subtracao = numero1 - numero2 
console.log(subtracao)
let divisao = numero1 / numero2 
console.log(divisao)
let multiplicacao = numero1 * numero2 
console.log(multiplicacao)
let modulo = numero1 % numero2 //resto da divisão



/*2 - Área de um Retângulo*/
let largura = 10
let altura = 15
let area = largura * altura
console.log(area) 

/*3 - Dobro e Metade */

let num1 = 10
let dobro = 10 * 2
console.log(dobro)
let Metade = num1 / 2
console.log(Metade) 

/* 4 - Média Aritmética */
let nota1 = 7
let nota2 = 8
let nota3 = 9 
let media = nota1 + nota2 + nota3 / 3
console.log(media)

/*5 - Conversão de Temperatura */
 let temp = 9
 let F = (temp * 9/5) + 32
 console.log(temp)


 /*6 - Valor da Compra */

let compra = Number(prompt("Qual o preço do produto ?"))
console.log(compra)
let  quantidade = Number(prompt("qual a quantidade do produto"))
console.log(quantidade)
let total1 = compra * quantidade
console.log(total1)


/*7 - Divisão da Conta */
let conta = Number(prompt("Qual o valor total da conta?"))
console.log(conta)
let  NumeroDePessoas = Number(prompt("Qual o numero de pessoas ?"))
console.log(NumeroDePessoas)

/*8 - Idade em Meses */
let idadeAnos = Number(prompt("Digite sua idade em anos:"));
let idadeMeses = idadeAnos * 12;

alert("Sua idade em meses é: " + idadeMeses);


/*9 Divisão exata*/

let nume1 = Number(prompt("Digite o primeiro número:"));
let nume2 = Number(prompt("Digite o segundo número:"));

let div = numero1 / numero2;
let resto = numero1 % numero2;

alert("Resultado da divisão: " + div + 
      "\nResto da divisão: " + resto);


/*10 - Horas em Minutos */

let horas = Number(prompt("Digite o valor em horas:"));
let minutos = horas * 60;

alert("O valor em minutos é: " + minutos);




