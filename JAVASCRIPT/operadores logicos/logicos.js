console.log("01 - Pode Dirigir")
let idade = Number(prompt("Qual a idade ?"))
let cnh = (prompt("Possui CNH ?"))
console.log( idade >= 18 && cnh == "sim")

console.log("------------------------")

console.log("02 - Aprovação Escolar")
let nota  = Number(prompt("Qual a nota ?"))
let falt = Number(prompt("qual é a quantidade de dias faltados ?"))
console.log(nota >= 6  &&  falt <= 10)


console.log("03 - Acesso ao Evento")
let idd1 = Number(prompt("Qual a idade ? "))
let convite = Number(prompt(" tem o convite ?  "))
console.log(idd1 >= 18 &&  convite == "sim")


console.log("04 - Empréstimo Bancário")
let salario = Number(prompt("Qual o  valor do salario ?"))
let NomeLimpo = Number(prompt("tem o nome limpo ?"))
console.log(salario >= 2500 && NomeLimpo >= "sim")

console.log("05 - Entrada")
let convite1 = Number(prompt("tem o convite ?"))
let NomeLista = Number(prompt("tem o nome na lista  ?"))
console.log( convite1 == "sim" || NomeLista == "sim")


console.log("06 - Desconto na Barbearia")
let valor = Number(prompt("Qual o valor da compra ?"))
let vip = Number(prompt("Voce é cvliente vip ?"))
console.log(valor == "sim " || vip == "sim")


console.log("07 - Recuperação Escolar")
let nota1 = Number(prompt("Qual foi sua nota na recuperaç~]ao ?"))
let extra = Number(prompt("Fez o trabalho extra ?"))
console.log(nota1 >5 && extra == "sim")


console.log("08 - Liberação de Sistema")
let senha = prompt("Qual é a senha ?")
let digital = prompt("A digital foi reconhecida ?")
console.log( senha == "1234" && digital == "sim")

console.log("--------------------------")

console.log("09 - Conta Bloqueada")
let bloqueado = true
console.log(bloqueado)

console.log("--------------------------")

console.log("10 - cadastro incompleto")
let temCadastro = true
console.log(bloqueado)

console.log("--------------------------")

console.log("11 - Acesso Completo")
let login = prompt("Qual é o login ?")
let senha1 = Number(prompt("Qual a senha ?"))
console.log(login == "admin" && senha == "senai2026")

console.log("--------------------------")

console.log("12 - Compra Parcelada")
let ValorCompra = Number(prompt("Qual o valor da compra"))
let PossuiCartao =  Number(prompt("possui o cartão da loja ?"))
let NomeLimpo1 = prompt("o nome esta limpo ?")
console.log(ValorCompra > 300 && PossuiCartao && NomeLimpo1)

console.log("--------------------------")

console.log("13 - Matrícula")
let idd3 = (prompt("Qual sua idade?"))
let doc = (prompt("Entregou os documentos (sim/nao)?"))
let nmlimpo = (prompt("Possui o nome limpo (sim/nao)?"))
console.log(idd3 >= 17 && doc == "sim" && nomelimpo == "sim")

console.log("--------------------------")

console.log("14 - Entrada no Clube")
let idd2 = (prompt("Qual sua idade?"))
let socio = (prompt("Você é socio (sim/nao)?"))
let convidado = (prompt("É convidao (sim/nao)?"))
console.log(idd2 >= 15 && (socio == "sim" || convidado == "sim"))