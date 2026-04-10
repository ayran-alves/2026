function saudacao(nome) {
    return "Bom dia" + nome
}
let  nome = prompt("Qual o seu nome ?")
let aux = saudacao(nome)
console.log(aux)
console.log(saudacao(nome))


function soma(n1, n2) {
    let resultado = n1 + n2
    return resultado
    return n1 + n2
}
let n1 = Number(prompt("Primeiro numero"))
let n2 = Number(prompt("segundo numero"))
let auxiliar = soma (n1,n2)
console.log(auxiliar)
console.log(soma(n1,n2))

function previsaoDoTempo(temperatura) {
    if(temperatura > 30) {
        return "calor"
    } else if ( temperatura < 12 ) {
        return "FRIO"
    }else {
        return "OK"
    }
}
let temperatura = Number(prompt("Qual a temperatura ? "))
let previsao = previsaoDoTempo(temperatura)
console.log(previsao)

/** pergunte um salario para o funcionario, se for menor que 200 de 500 reais de aumento e mostre o novo salario, senao, mostre, "sem aumento" */

function classificacao(salario) {
  let aumento = salario + 500
    if(salario < 2500) {
        return "500 reais de aumento " + aumento
    } else {
        return "Sem aumento"
    }
    
}
let salario = Number(prompt("Qual o salario"))
let  aumento1 = classificacao (salario)
console.log(aumento1)


/* peça  um numero para o usuario, e mostre uma porcetagem dele , se o numero menor ou igual a 100, mostre 10% do valor, se for menor ou igual a 1000, mostre 35 % do valor, senão, mostre "Sem porcentagem" */

function porcentagem(numero ) {
    if ( numero <= 100) {
        return  numero * 0.10
    } else if ( numero <= 1000) {
        return numero * 0.35
    }else {
        return "Sem porcentagem"
    }
}
let numero = Number(prompt( "Informe um numero"))
let porc = porcentagem(numero)
console.log(porc)

