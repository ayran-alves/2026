/* 1 - Verificação de Maioridade */
let idade = Number(prompt("Qual é sua idade ?"))
let id = idade >=18 ? "Maior de idade" : "Menor de idade"
console.log(id) 

console.log("----------------------------------")

/* 2 - Par ou Ímpar */
let num1 = Number(prompt("Informe um numero"))
let num2 = num1 %2
let  e = num2 == 0?  "par" : "impar"
console.log(e)

console.log("----------------------------------")

/* 3 - Resultado Escolar */
let nota1 = Number(prompt("Informe uma nota"))
let  resultado =  nota1 >= 6? "Aprovado" : "Reprovado"
console.log(resultado)

console.log("----------------------------------")

/* 4 - Saldo Bancário */
let saldo = Number(prompt("Informe o saldo"))
let Bancário = saldo > 0 ? "Saldo positivo" : "Saldo negativo"
console.log(Bancário)

console.log("----------------------------------")

/*  5 - Desconto na Compra */
let valor = Number(prompt("Qual o valor da compra ?"))
let val = valor >= 100 ? "você vai receber 10% de desconto": "mantenha o valor normal"
console.log(val)

console.log("----------------------------------")

/* 6 - Entrada em Evento */
let idade1 = Number(prompt("Qual é sua idade "))
let idd = idade1 >= 18 ? "Entrada permitida" : "Entrada proibida"
console.log(idd)

console.log("----------------------------------")

/* 7 - Login Simples */
let usuario = (prompt("qual o usuario"))
let user = usuario !=  "Admin"? "Acesso negado": "Acesso liberado"
console.log(user)

console.log("----------------------------------")

/*  8 - Temperatur*/
 let temp1 = Number(prompt("Qual é a temperatura ?"))
 let temp2 = temp1 > 30 ? "Esta quente" : "Temperatura normal"
 console.log(temp2)

console.log("----------------------------------")

 /*  9 - Número Positivo ou Negativo */

 let numero = Number(prompt("Informe um numero "))
 let num4 = numero >0? "Numero positivo" : "Numero negativo"
 console.log(num4)
 
 console.log("----------------------------------")


/* 10 - Faixa Etária  */
let idd1 = Number(prompt("Qual a idade?"))
let idd2 = idd1 < 12? "Criança" : idd1 < 18 ?"Adolescente" : idd1 <60 ? "Adulto": "Idoso"
console.log(idd2)

console.log("----------------------------------")

/* 11 - Velocidade do Veículo  */
let velociadade = Number(prompt("Qual é a velocidade ?"))
let vel = velociadade > 80 ? "Multado" : "Dentro do limite"
console.log(vel)

console.log("----------------------------------")

/* 12- Compra Aprovada*/
let valor1 = Number(prompt("Qual o valor ?"))
let limite = Number(promptI("Qual o limite ?"))
let val1 = valor1 <= limite ? "Compra aprovada" : "Compra recusada"
console.log(val1)

console.log("----------------------------------")

/* 13  - Sistema de Pontuação de Jogo */
let pontuação = Number(prompt("Qual a pontuação ?"))
let pont = pontuação < 100 ? "Iniciante" : pontuação < 500? "Intermediario" : pontuação <1000? "Avançado" :
"Mestre"
console.log(pont)


