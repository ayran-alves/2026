
let idade = 18
let convite = true 
console.log(idade >= 18 && convite == true ) //true

console.log("------------------------")
let dia = "quinta"
console.log(dia == "sabado" || dia == "domingo") // false

console.log("------------------------")
let valor = 20
console.log(valor >= 10 && valor <= 99) 

console.log("------------------------")
let bloqueado = true
console.log(!bloqueado) // true

 let numero = Number(prompt("informe um numero"))
 console.log(!(numero >= 100))

 /* para fazer login em um computador do senai, o usuario deve se "TDS2" e a senha "senai2026". faça o codigo que pergunte as credenciais para o usuario e mostre se ele consegue ou não acessar */

 console.log("resposta")
 let login = (prompt("login"))
 let senha = Number(prompt("senha"))
 console.log(login == "TDS2" &&  senha == "senai2026")

 /* para ser  aprovado o aluno precisa ter nota maior ou igual a 50 e ter a frequencia maior ou igual a 75.
 peça as informações para o usuario e veja se ele será aprovado*/

 console.log("resposta 2")
let aluno = Number(prompt("qual a nota ?"))
let freq = Number(prompt("Qual sua frequencia"))
console.log(aluno >=50 && freq >= 75)


/* Para assistir um filme de terror no cinema, é preciso
ter idade maior ou igual a 14 ou estar acompanhado do
responsável */

console.log("respposta3")
let idd1 = Number(prompt("Qual sua idade"))
let acomp = prompt("esta acompanhado ?")
console.log(idd1 >= 14 || aconp == sim )

/* Para fazer academia do Sesi você deve ser aluno do
sesi ou do senai e pagar a mensalidade */

console.log("resposta4")
let Aluno = prompt("de qual escola voce é ")
let mensalidade = prompt("voce paga a mensalidade ? ")
console.log(escola == "sesi" || escola == "senai " && mensalidade == "sim"  )

/* pergunte para o usuario se ele tem internet (true/false) e mostre*/
let internet = prompt ("você tem  internet ?")
console.log(internet == true)
console.log(internet)

